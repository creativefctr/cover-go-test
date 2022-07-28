import { Link } from "react-router-dom";
import PageSkeleton from "../components/page/PageSkeleton";

export default function Intro(){
    return <PageSkeleton title="Let's get a quote for your life insurance">
        <p>We provide a simple wizard to walk you through your insurance purchase. It will only take a few clicks to get a quote.</p>
        <Link to="/form" className="button">Let's Go!</Link>
  </PageSkeleton>;
}