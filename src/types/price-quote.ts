import { Currency } from "./currency";
import { Package } from "./package";

export type PriceQuoteRequirements = {
  age: number;
  selectedPackage: Package;
  currency: Currency;
};
