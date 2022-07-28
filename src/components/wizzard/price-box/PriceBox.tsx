import { observer } from "mobx-react";
import { useCallback, useEffect, useState } from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import { CountryCurrencies } from "../../../constants/country-currencies";
import { useRootStore } from "../../../store/StoreContext";
import "./style.scss";

export default observer(function PriceBox(){

    const store = useRootStore();

    const [prevValue, setPrevValue] = useState(store.price());
    const price = store.price();
    useEffect(()=>{
        setTimeout(()=>{
            setPrevValue(price);
        }, 600);
    }, [price]);

    const country = store.country;

    const formattingFn = useCallback((num: number): string=>num.toLocaleString() + ' ' + CountryCurrencies[country].toUpperCase(), [country]);

    return <div className="price-box">
        {
            store.canInsure() ? <>
                <h1 className="price"><CountUp start={prevValue} end={store.price()} useEasing={true} duration={1} formattingFn={formattingFn}/></h1>
                <span>Per Year, No VAT</span>
                {store.isValid ? <Link to="/results" className="button">By Now →</Link> : <div className="button" onClick={()=>alert(`Please enter name and age...`)}>By Now →</div>}
            </> : <span style={{color: 'red'}}>Unfortunately we do not support insurrance for people who are over 100...<br/>&nbsp;</span>
        }
        <span>Have Questions?</span>
        <a href="sdfsf">Contact Support</a>
    </div>;
});