import { Package } from "../types/package";
export const PackageRates: Record<Package, number> = {
  [Package.STANDARD]: 1,
  [Package.SAFE]: 1.5,
  [Package.SUPER_SAFE]: 1.75,
};
