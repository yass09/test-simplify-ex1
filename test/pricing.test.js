import assert from "assert";
import { calculateDiscount } from "../simplified.js";

const almostEqual = (a, b, tol = 1e-9) => {
  if (Math.abs(a - b) > tol) {
    throw new Error(`${a} is not approximately equal to ${b}`);
  }
};

// Type 1: no discounts
assert.strictEqual(calculateDiscount(100, 1, 1), 100);

// Type 2: 10% base reduction then loyalty discount
almostEqual(calculateDiscount(100, 2, 1), 89.1); // 90 * 0.99
almostEqual(calculateDiscount(100, 2, 6), 85.5); // 90 * 0.95

// Type 3: 30% base reduction then loyalty discount
almostEqual(calculateDiscount(100, 3, 2), 68.6); // 50 * 0.98
almostEqual(calculateDiscount(200, 3, 2), 137.2); // 140 * 0.98

// Type 4: 50% base reduction then loyalty discount
almostEqual(calculateDiscount(100, 4, 0), 50); // 50 * 1.0
almostEqual(calculateDiscount(50, 4, 0), 25); // 25 * 1.0

// // Invalid type should return 0
assert.strictEqual(calculateDiscount(100, 99, 1), 0);

console.log("All tests passed");
