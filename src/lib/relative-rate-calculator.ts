import { PriceQuoteRequirements } from "../types/price-quote";
import calculateRate from "./rate-calculator";

export type RelativeRateCaluculationResult = {
  increasePercentage: number;
  additionalAmount: number;
};

export default function calculateRelativeRate(
  baseQuoteReqs: PriceQuoteRequirements,
  currentQuoteRates: PriceQuoteRequirements
): RelativeRateCaluculationResult {
  const basePrice = calculateRate(baseQuoteReqs);
  const newPrice = calculateRate(currentQuoteRates);
  return {
    increasePercentage: (newPrice / basePrice - 1) * 100,
    additionalAmount: newPrice - basePrice,
  };
}
