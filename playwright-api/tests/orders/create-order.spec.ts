import { test, expect, request } from "@playwright/test";
import {
    randomFullAddress,
    randomGetCustomerId,
    quantityGenerator,
    unitPriceGenerator,
    productGerenerator
} from "../../core/main";

test.describe("E2E Flow Create Order", async () => {
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
                        unit_price: unitPriceGenerator(10000, 99999)
                    }
                ]
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
        const res = await request.get("/api/orders")

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
    })
});