import type { CheckoutAddress } from "../pages/cart/CheckoutPage";

export type CheckoutTotals = {
  subtotal: string;
  tax: string;
  total: string;
};

export const checkoutData = {
  singleItem: {
    address: { firstName: "John", lastName: "Smith", postalCode: "1989 San Francisco US" },
    totals: { subtotal: "$29.99", tax: "$2.40", total: "$32.39" },
  },
  multipleItems: {
    address: { firstName: "Lily", lastName: "Park", postalCode: "77 Castro St, Mountain View, CA" },
    totals: { subtotal: "$55.97", tax: "$4.48", total: "$60.45" },
  },
  allItems: {
    address: { firstName: "Noah", lastName: "Foster", postalCode: "210 University Ave, Palo Alto, CA" },
    totals: { subtotal: "$129.94", tax: "$10.40", total: "$140.34" },
  },
  regression: {
    address: { firstName: "Regression", lastName: "Test", postalCode: "1234 Test Road" },
    totals: { subtotal: "$55.97", tax: "$4.48", total: "$60.45" },
  },
} as const satisfies Record<string, { address: CheckoutAddress; totals: CheckoutTotals }>;
