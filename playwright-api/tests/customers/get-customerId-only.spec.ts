import { test, expect } from "@playwright/test";
import { randomGetCustomerId } from "../../core/main.js";

test("Retrieved the customer by ID", async ({ request }) => {
  const CustomerID = randomGetCustomerId();
  const res = await request.get(`/api/customers/${CustomerID}`);

  expect(res.status()).toBe(200);

  const responseBody = await res.json();
  if (responseBody.status === "") {
    expect(responseBody.success).toBe(true);
  } else if (responseBody.data === "") {
    expect(responseBody.data.customer_id).toBe("number");
    expect(responseBody.data.customer_name).toBe("string");
    expect(responseBody.data.email).toBe("string");
    expect(responseBody.data.phone).toBe("string");
    expect(responseBody.data.address).toBe("string");
    expect(responseBody.data.created_at).toBe("string");
  }

});
