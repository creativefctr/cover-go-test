import { observer } from "mobx-react";
import { ChangeEvent, useCallback } from "react";
import { CountryCurrencies } from "../../../constants/country-currencies";
import { useRootStore } from "../../../store/StoreContext";
import "./style.scss";

export default observer(function PersonalInfoForm(){

    const store = useRootStore();

    const onNameChange = useCallback((e: ChangeEvent<HTMLInputElement>)=>{
        store.setName(e.target.value);
    }, [store]);

    const onAgeChange = useCallback((e: ChangeEvent<HTMLInputElement>)=>{
        store.setAge(parseInt((e.target.value)));
    }, [store]);

    const onCountryChange = useCallback((e: ChangeEvent<HTMLSelectElement>)=>{
        store.setCountry((e.target.value as any));
    }, [store]);

    return <div className="personal-info">
        <div className="control">
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="name" value={store.name} onChange={onNameChange}/>
        </div>
        <div className="control">
            <label htmlFor="age">Age:</label>
            <input type="number" name="age" id="age" value={store.age === 0 ? '' : store.age}  onChange={onAgeChange}/>
        </div>
        <div className="control">
            <label htmlFor="country">Country:</label>
            <select name="country" id="country" onChange={onCountryChange}>
                {
                    Object.keys(CountryCurrencies).map(countryName=><option selected={countryName === store.country}>{countryName}</option>)
                }
            </select>
        </div>
    </div>;
});