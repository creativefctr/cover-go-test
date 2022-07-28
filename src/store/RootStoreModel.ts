import { CountryCurrencies } from "./../constants/country-currencies";
import { Country } from "../types/country";
import { types } from "mobx-state-tree";
import calculateRate from "../lib/rate-calculator";
import { Package } from "../types/package";
import calculateRelativeRate, {
  RelativeRateCaluculationResult,
} from "../lib/relative-rate-calculator";

// Define the root store model
export const RootModel = types
  .model({
    wizzardIndex: types.number,
    name: types.string,
    age: types.number,
    country: types.enumeration([
      Country.Australia,
      Country.Hoang_Kong,
      Country.USA,
    ]),
    package: types.enumeration([
      Package.STANDARD,
      Package.SAFE,
      Package.SUPER_SAFE,
    ]),
    isValid: types.boolean,
  })
  .actions((self) => ({
    setName(name: string) {
      self.name = name;
      this.syncValidity();
    },
    setAge(age: number) {
      if (isNaN(age)) {
        age = 0;
      }
      self.age = +age;
      this.syncValidity();
    },
    setCountry(country: Country) {
      self.country = country;
    },
    setPackage(packageName: Package) {
      self.package = packageName;
    },
    syncValidity() {
      self.isValid = self.age > 0 && self.name.length > 0;
    },
  }))
  .views((self) => ({
    canInsure(): boolean {
      return self.age < 100 || self.age === 0;
    },
    canBuy(): boolean {
      return this.canInsure() && self.isValid;
    },
    price(): number {
      return calculateRate({
        age: self.age,
        currency: CountryCurrencies[self.country],
        selectedPackage: self.package,
      });
    },
    relativePrice(toPackage: Package): RelativeRateCaluculationResult {
      return calculateRelativeRate(
        {
          age: self.age,
          currency: CountryCurrencies[self.country],
          selectedPackage: Package.STANDARD,
        },
        {
          age: self.age,
          currency: CountryCurrencies[self.country],
          selectedPackage: toPackage,
        }
      );
    },
  }));
