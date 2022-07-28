import Logo from "../../assets/logo.svg";
import "./style.scss";

interface Props{
    title: string,
    children?: React.ReactNode;
}

export default function PageSkeleton(props: Props){
    return <div className="page">
        <div className="title">{props.title}</div>
        <div className="content">{props.children}</div>
        <div className="footer">Powered By <img src={Logo} alt={'Covergo'} /></div>
    </div>
}