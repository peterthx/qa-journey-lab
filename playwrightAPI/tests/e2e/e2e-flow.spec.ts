import { test, expect } from "@playwright/test";
import {
  randomCompanyName,
  randomEmail,
  randomPhoneNumber,
  randomFullAddress,
  randomGetCustomerId,
} from "../../core/main";

test.describe("E2E Flow Created, Retrieved and Update Customer", async () => {
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
  });

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
});
