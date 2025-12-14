import http from "k6/http";
import { check, group, sleep } from "k6";
import exec from "k6/execution";
import { BASE_URL, SERVICE } from "../../.env/settings.js";
import {
  randomSupplierName,
  randomContactName,
  randomEmail,
  randomPhoneNumber,
  randomAddress,
} from "../../utils/helpers.js";

// Module-scoped storage for the supplier id. This persists per VU across iterations.
let supplierId = null;
function setSupplierId(id) {
  supplierId = id;
}
function getSupplierId() {
  return supplierId;
}

export const options = {
  stages: [
    { duration: "1m", target: 5 }, // Warm-up period
    { duration: "2m", target: 15 }, // Normal load period
    { duration: "3m", target: 25 }, // Mini-peak (review/testing together)
    { duration: "2m", target: 15 }, // Back to normal load
    { duration: "1m", target: 0 }, // Cool-down period
  ],
  thresholds: {
    http_req_duration: ["p(95)<500"], // 95% of requests should be below 500ms
    http_req_failed: ["rate<0.01"], // Less than 1% of requests should fail
  },
};

export default function () {
  // Prefer built-in globals when available, fall back to execution API values.
  const vu =
    typeof __VU !== "undefined"
      ? __VU
      : (exec && exec.vu && exec.vu.idInTest) || 0;
  const iter =
    typeof __ITER !== "undefined"
      ? __ITER
      : (exec && exec.vu && exec.vu.iterationInScenario) || 0;
  const scenario = exec && exec.scenario ? exec.scenario.name : "default";
  const time = new Date(Date.now()).toISOString();

  console.log(`VU: ${vu}, Iter: ${iter}, Scenario: ${scenario}, Time: ${time}`);
  group("Post new supplier", function () {
    const payload = {
      supplier_name: randomSupplierName(),
      contact_person: randomContactName(),
      email: randomEmail(randomContactName()),
      phone: randomPhoneNumber(),
      address: randomAddress(),
    };

    const res = http.post(
      `${BASE_URL.ENDPOINT}${SERVICE.POST_NEW_SUPPLIER}`,
      JSON.stringify(payload),
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    let body = null;
    try {
      body = res.json();
    } catch (e) {
      console.warn("POST response not valid JSON", e);
    }

    // retrieve the newly created supplier ID if present
    if (body && body.data && body.data.supplier_id) {
      setSupplierId(body.data.supplier_id);
      console.log("Created supplier:", getSupplierId());
    } else {
      console.warn("Supplier ID not found in POST response", body);
    }

    check(res, {
      "status is 201": (r) => r.status === 201,
      "valid JSON": () => body !== null,
      "has supplier_id": () => body && body.data && body.data.supplier_id,
    });

    // sleep(Math.random() * 2 + 0.5);
  });

  group("Delete supplier", function () {
    const id = getSupplierId();
    if (!id) {
      console.warn("No supplier id available to delete; skipping DELETE step.");
      return;
    }

    const res = http.del(`${BASE_URL.ENDPOINT}${SERVICE.DEL_SUPPLIER}/${id}`);

    check(res, {
      "delete status 200 or 204": (r) => r.status === 200 || r.status === 204,
    });
    console.log("Deleted supplier:", id);

    setSupplierId(null);
  });

  group("Get all suppliers", function () {
    const res = http.get(`${BASE_URL.ENDPOINT}${SERVICE.GET_ALL_SUPPLIERS}`);

    let body = null;
    try {
      body = res.json();
    } catch (e) {
      console.warn("GET response not valid JSON", e);
    }

    check(res, {
      "status is 200": (r) => r.status === 200,
      "valid JSON": () => body !== null,
      "check response body": () => body && body.success === true,
    });
  });
}
