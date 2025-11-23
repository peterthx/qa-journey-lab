import { test, expect } from "@playwright/test";
import {
  randomCompanyName,
  randomEmail,
  randomPhoneNumber,
  randomFullAddress,
} from "../../core/main";

test("Create a new customer", async ({ request }) => {
  const res = await request.post("/api/customers", {
    data: {
      customer_name: randomCompanyName(),
      email: randomEmail(randomCompanyName()),
      phone: randomPhoneNumber(),
      address: randomFullAddress(),
    },
  });
  // verify status code common
  expect(res.status()).toBe(201);
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
  console.log(`Created customer with ID: ${responseBody.data.customer_id}`);
  console.log(`Response Body: ${JSON.stringify(responseBody)}`);
});
