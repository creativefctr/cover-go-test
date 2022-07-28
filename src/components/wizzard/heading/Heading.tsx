import "./style.scss";

interface Props{
    title: string
}
export default function Heading(props: Props){
    return <div className="heading"><div className="label">{props.title}</div></div>
}