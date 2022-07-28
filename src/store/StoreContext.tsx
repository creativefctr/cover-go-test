import { Instance } from "mobx-state-tree";
import { createContext, useContext } from "react";
import { Country } from "../types/country";
import { Package } from "../types/package";
import { RootModel } from "./RootStoreModel";

export type RootInstance = Instance<typeof RootModel>;

const StoreContext = createContext<null | RootInstance>(null);

export const StoreProvider = StoreContext.Provider;
export function useRootStore(): RootInstance {
   const store = useContext(StoreContext);
   if (store === null) {
      throw new Error('Store cannot be null, please add a context provider');
   }
   return store;
}

export function createRootStore() : RootInstance{
    return RootModel.create(
        {
            age: 0,
            country: Country.USA,
            isValid: false,
            package: Package.STANDARD,
            name: '',
            wizzardIndex: 0
        }
    );
}