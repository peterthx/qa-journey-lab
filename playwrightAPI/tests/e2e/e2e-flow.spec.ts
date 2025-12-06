import { test, expect } from "@playwright/test";
import {
  randomCompanyName,
  randomEmail,
  randomPhoneNumber,
  randomFullAddress,
  randomGetCustomerId,
  quantityGenerator,
  unitPriceGenerator,
  productGerenerator,
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

  test("Create a new Order", async ({ request }) => {
    const res = await request.post("/api/orders", {
      data: {
        customer_id: randomGetCustomerId(),
        warehouse_id: 1,
        shipping_address: randomFullAddress(),
        items: [
          {
            product_id: productGerenerator(1, 10),
            quantity: quantityGenerator(1, 5),
            unit_price: unitPriceGenerator(10000, 99999),
          },
        ],
      },
    });

    // verify status code common
    expect(res.status()).toBe(201);
    const responseBody = await res.json();
    if (responseBody.status === "") {
      expect(responseBody.success).toBe(true);
    } else if (responseBody.data === "") {
      expect(responseBody.data.order_id).toBe("number");
      expect(responseBody.data.customer_name).toBe("string");
      expect(responseBody.data.warehouse_name).toBe("string");
      expect(responseBody.data.order_date).toBe("string");
      expect(responseBody.data.status).toBe("string");
      expect(responseBody.data.total_amount).toBe("number");
      expect(responseBody.data.shipping_address).toBe("string");
    }
  });

  test("Get all Orders", async ({ request }) => {
    const res = await request.get("/api/orders");

    // verify status code common
    expect(res.status()).toBe(200);
    const responseBody = await res.json();
    if (responseBody.status === "") {
      expect(responseBody.status).toBe(true);
    } else if (responseBody.data === "") {
      expect(responseBody.data.order_id).toBe("number");
      expect(responseBody.data.customer_name).toBe("string");
      expect(responseBody.data.warehouse_name).toBe("string");
      expect(responseBody.data.order_date).toBe("string");
      expect(responseBody.data.status).toBe("string");
      expect(responseBody.data.total_amount).toBe("number");
      expect(responseBody.data.total_amount).toBe("string");
    }
  });
});
