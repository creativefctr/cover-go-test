import PageSkeleton from "../components/page/PageSkeleton";
import { useRootStore } from "../store/StoreContext";
import Payment from "../assets/payment5.jpg";
import { useCallback } from "react";
import { CountryCurrencies } from "../constants/country-currencies";
export default function Results(){
  const store = useRootStore();
  const formattingFn = useCallback((num: number): string=>num.toLocaleString() + ' ' + CountryCurrencies[store.country].toUpperCase(), [store.country]);

    return <PageSkeleton title="Summary & Payment Options">
        <div className="wizzard-container">
          <div className="summary">
            Name: <span>{store.name}</span><br/>
            Age: <span>{store.age}</span><br/>
            Country: <span>{store.country}</span><br/>
            Price: <span>{formattingFn(store.price())}</span><br/>
            <br/>
            <img src={Payment} alt={"payment"}/>
          </div>
        </div>
  </PageSkeleton>;
}