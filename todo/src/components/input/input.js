const Input=(props)=>{
    return<>
    
    <input type="text" placeholder={props.palce} name={props.name} onChange={props.fun}/>
    </>
}
export default Input;