import { Currency } from "../../types/currency";
import { Package } from "../../types/package";
import calculateRelativeRate from "../relative-rate-calculator";

const baseRate = {
  age: 10,
  currency: Currency.HKD,
  selectedPackage: Package.STANDARD,
};

test("can calculate relative price for safe package", () => {
  expect(
    calculateRelativeRate(baseRate, {
      ...baseRate,
      selectedPackage: Package.SAFE,
    })
  ).toEqual({
    increasePercentage: 50,
    additionalAmount: 50,
  });
});

test("can calculate relative price for super safe package", () => {
  expect(
    calculateRelativeRate(baseRate, {
      ...baseRate,
      selectedPackage: Package.SUPER_SAFE,
    })
  ).toEqual({
    increasePercentage: 75,
    additionalAmount: 75,
  });
});
