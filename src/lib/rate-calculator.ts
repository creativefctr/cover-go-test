import { PackageRates } from "./../constants/package-rates";
import { CurrencyRates } from "../constants/currency-rates";
import { PriceQuoteRequirements } from "../types/price-quote";

export default function calculateRate(
  quoteReq: PriceQuoteRequirements
): number {
  const currencyRate = CurrencyRates[quoteReq.currency];

  if (!currencyRate) {
    throw new Error(`Incvalid currency: ${quoteReq.currency}`);
  }

  const packageRate = PackageRates[quoteReq.selectedPackage];

  return 10 * quoteReq.age * currencyRate * packageRate;
}
