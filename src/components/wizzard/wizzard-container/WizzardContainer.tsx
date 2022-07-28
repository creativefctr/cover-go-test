import classNames from "classnames";
import { observer } from "mobx-react";
import { useRootStore } from "../../../store/StoreContext";
import PackageList from "../../package/PackageList";
import PersonalInfoForm from "../form/PersonalInfoForm";
import Heading from "../heading/Heading";
import PriceBox from "../price-box/PriceBox";
import "./style.scss";

export default observer(function WizzardContainer(){
    const store = useRootStore();
    return <div className="wizzard-container">
        <div className="main">
            <Heading title="Personal Information" />
            <PersonalInfoForm/>
            <Heading title="Select A Package" />
            <PackageList/>
        </div>
        <div className={classNames("sidebar", {'can-not-buy': !store.canInsure()})}>
            <PriceBox/>
        </div>
    </div>;
})