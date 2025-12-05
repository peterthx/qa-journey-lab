import http from "k6/http";
import { check, sleep } from "k6";
import { BASE_URL, SERVICE } from "../../.env/settings.js";
export const options = {
  iterations: 50,
  vus: 5,
  thresholds: {
    http_req_duration: ["p(95)<500"], // 95% of requests should be below 500ms
    http_req_failed: ["rate<0.01"], // Less than 1% of requests should fail
  },
};

export default function () {
  const res = http.get(`${BASE_URL.ENDPOINT}${SERVICE.GET_ALL_ORDER_LIST}`);
  check(res, {
    "status is 200": (r) => r.status === 200,
    "status is success": (r) => r.json().success === true,
    "order id is number": (r) => typeof r.json().data[0].order_id === "number",
    "customer name is valid": (r) =>
      typeof r.json().data[0].customer_name === "string",
    "warehouse name is valid": (r) =>
      typeof r.json().data[0].warehouse_name === "string",
    "order date is valid": (r) =>
      typeof r.json().data[0].order_date === "string",
    "status is valid": (r) => typeof r.json().data[0].status === "string",
    "total items is valid": (r) =>
      typeof r.json().data[0].total_items === "string",
    "total amount is valid": (r) =>
      typeof r.json().data[0].total_amount === "string",
  });
  sleep(1);
}
