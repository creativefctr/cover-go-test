import { Package } from "../../types/package";
import PackageCard from "./PackageCard";
import "./style.scss";

export default function PackageList(){
    return <div className="package-list">
        <PackageCard title="Standard" description="A normal package with basic coverage" packageName={Package.STANDARD}/>
        <PackageCard title="Safe" description="Everything in standard, in addition to family insurance" packageName={Package.SAFE}/>
        <PackageCard title="Super Safe" description="All we can offer; we even insure your butt!" packageName={Package.SUPER_SAFE}/>
    </div>
}