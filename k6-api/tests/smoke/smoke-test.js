import http from "k6/http";
import { check, sleep } from "k6";
import { BASE_URL, SERVICE } from "../../.env/settings.js";

export default function () {
  const res = http.get(`${BASE_URL.ENDPOINT}${SERVICE.GET_ALL_PRODUCTS}`);
  sleep(1);

  check(res, {
    status: (res) => res.status === 200,
    "content-type": (res) =>
      res.headers["Content-Type"] === "application/json; charset=utf-8",
    "response-time": (res) => res.timings.duration < 200,
    "body-length": (res) => res.body.length > 0,
  });
}
