import { Country } from "../types/country";
import { Currency } from "./../types/currency";

export const CountryCurrencies: Record<Country, Currency> = {
  [Country.Hoang_Kong]: Currency.HKD,
  [Country.USA]: Currency.USD,
  [Country.Australia]: Currency.AUD,
};
