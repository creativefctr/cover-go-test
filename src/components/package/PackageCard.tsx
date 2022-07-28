import classNames from "classnames";
import { observer } from "mobx-react";
import { useCallback } from "react";
import { useRootStore } from "../../store/StoreContext";
import { Package } from "../../types/package";

interface Props{
    title: string,
    description: string,
    packageName: Package,
}

export default observer(function PackageCard(props: Props){

    const store = useRootStore();

    const onClick = useCallback(()=>{
        store.setPackage(props.packageName);
    },[store, props.packageName]);

    let badge = null;

    if(props.packageName !== Package.STANDARD && store.age > 0){
        const relative = store.relativePrice(props.packageName);
        badge = <span className="badge"> +${relative.additionalAmount}, {relative.increasePercentage}%</span>;
    }

    return <div className="package" onClick={onClick}>
        <div className={classNames("radio", {selected: store.package === props.packageName})}/>
        <div className="title">
            <b>{props.title}{badge}</b>
            <span>{props.description}</span>
        </div>
    </div>;
});