import { Package } from "../../types/package";
import { Currency } from "../../types/currency";
import calculateRate from "../rate-calculator";

// standard packages

test("can calculate standard rate in USD", () => {
  expect(
    calculateRate({
      age: 10,
      currency: Currency.USD,
      selectedPackage: Package.STANDARD,
    })
  ).toBe(200);
});

test("can calculate standard rate in HKD", () => {
  expect(
    calculateRate({
      age: 10,
      currency: Currency.HKD,
      selectedPackage: Package.STANDARD,
    })
  ).toBe(100);
});

test("can calculate standard rate in AUD", () => {
  expect(
    calculateRate({
      age: 10,
      currency: Currency.AUD,
      selectedPackage: Package.STANDARD,
    })
  ).toBe(300);
});

// safe packages

test("can calculate safe rate in USD", () => {
  expect(
    calculateRate({
      age: 10,
      currency: Currency.USD,
      selectedPackage: Package.SAFE,
    })
  ).toBe(200 * 1.5);
});

test("can calculate safe rate in HKD", () => {
  expect(
    calculateRate({
      age: 10,
      currency: Currency.HKD,
      selectedPackage: Package.SAFE,
    })
  ).toBe(100 * 1.5);
});

test("can calculate safe rate in AUD", () => {
  expect(
    calculateRate({
      age: 10,
      currency: Currency.AUD,
      selectedPackage: Package.SAFE,
    })
  ).toBe(300 * 1.5);
});

// super safe packages

test("can calculate super safe rate in USD", () => {
  expect(
    calculateRate({
      age: 10,
      currency: Currency.USD,
      selectedPackage: Package.SUPER_SAFE,
    })
  ).toBe(200 * 1.75);
});

test("can calculate super safe rate in HKD", () => {
  expect(
    calculateRate({
      age: 10,
      currency: Currency.HKD,
      selectedPackage: Package.SUPER_SAFE,
    })
  ).toBe(100 * 1.75);
});

test("can calculate super safe rate in AUD", () => {
  expect(
    calculateRate({
      age: 10,
      currency: Currency.AUD,
      selectedPackage: Package.SUPER_SAFE,
    })
  ).toBe(300 * 1.75);
});
