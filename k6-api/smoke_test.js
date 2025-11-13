import http from "k6/http";
import { check, sleep } from "k6";

export default function () {
  const res = http.get("http://srv946485.hstgr.cloud:3000/api/inventory");
  sleep(1);

  check(res, {
    status: (res) => res.status === 200,
    "content-type": (res) =>
      res.headers["Content-Type"] === "application/json; charset=utf-8",
    "response-time": (res) => res.timings.duration < 200,
    "body-length": (res) => res.body.length > 0,
  });
}
