// calc.test.ts
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { calculate } from "./calc.ts";

Deno.test("Addition", () => {
  assertEquals(calculate("2 + 3"), 5);
});

Deno.test("Multiplication", () => {
  assertEquals(calculate("4 * 5"), 20);
});

Deno.test("Combined operations", () => {
  assertEquals(calculate("2 + 3 * 4"), 14);
});
