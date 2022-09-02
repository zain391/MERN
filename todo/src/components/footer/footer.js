import FooterChild from "../footerChild/footerChild";
function Footer(props){
    return <>
        <h1 style={{background:props.color}}> {props.title}</h1>
        <FooterChild title={props.title}/>
    </>
}
export default Footer;