import http from "k6/http";
import { check, sleep, group } from "k6";
import { BASE_URL, SERVICE } from "../../.env/settings.js";
import {
  randomAddress,
  randomOrderID,
  randomUnitPrice,
  randomQuantity,
} from "../../utils/helpers.js";

// export const options = {
//   stages: [
//     { duration: "1m", target: 3 },
//     { duration: "5m", target: 3 },
//     { duration: "1m", target: 0 },
//   ],
//   thresholds: {
//     http_req_duration: ["p(95)<500"], // 95% of requests should be below 500ms
//     http_req_failed: ["rate<0.01"], // Less than 1% of requests should fail
//   },
// };

export function createOrderPayload() {
  return {
    customer_id: 1,
    warehouse_id: 1,
    shipping_address: randomAddress(),
    items: [
      {
        product_id: randomOrderID(),
        quantity: randomQuantity(),
        unit_price: randomUnitPrice(),
      },
    ],
  };
}

export default function () {
  group("Get all order list", function () {
    const res = http.get(`${BASE_URL.ENDPOINT}${SERVICE.GET_ALL_ORDER_LIST}`);
    check(res, {
      "status is 200": (r) => r.status === 200,
      "status is success": (r) => r.json().success === true,
      "order id is number": (r) =>
        typeof r.json().data[0].order_id === "number",
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
  });

  group("Create New a order", function () {
    const payload = createOrderPayload();

    const res_create = http.post(
      `${BASE_URL.ENDPOINT}${SERVICE.POST_NEW_ORDER}`,
      JSON.stringify(payload),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    check(res_create, {
      "new status is 201": (r) => r.status === 201,
      "new status is success": (r) => r.json().success === true,
      "new order id is number": (r) =>
        typeof r.json().data.order_id === "number",
      "new customer id is valid": (r) =>
        typeof r.json().data.customer_id === "number",
      "new warehouse id is valid": (r) =>
        typeof r.json().data.warehouse_id === "number",
      "new order date is valid": (r) =>
        typeof r.json().data.order_date === "string",
      "new status is valid": (r) => 
        typeof r.json().data.status === "string",
      "new total amount is valid": (r) =>
        typeof r.json().data.total_amount === "string",
      "new shipping address is valid": (r) =>
        typeof r.json().data.shipping_address === "string",
    });
  });
}
