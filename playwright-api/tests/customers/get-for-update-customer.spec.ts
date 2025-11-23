import { test, expect } from "@playwright/test";
import {
  randomCompanyName,
  randomEmail,
  randomPhoneNumber,
  randomFullAddress,
  randomGetCustomerId,
} from "../../core/main";

test("Update the customer by ID", async ({ request }) => {
  const CustomerID = randomGetCustomerId();
  const res = await request.put(`/api/customers/${CustomerID}`, {
    data: {
      customer_name: randomCompanyName(),
      email: randomEmail(randomCompanyName()),
      phone: randomPhoneNumber(),
      address: randomFullAddress(),
    },
  });

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
