import React,{useState,useEffect,useRef} from 'react'
import './VariableFormatter.css'


const VariableFormatter = props =>{
  const [value,setValue] = useState("");
  const [formattedValue,setFormatted] = useState("");
  const textRef = useRef();
const handleChange = evt =>
{
  const val = evt.target.value;
  setValue(val);
}
const reset = evt =>
{
  setValue("");
  setFormatted("");
  textRef.current.value="";
}
  const format = ()=>
  {
    const aggrFunc = ["sum","avg","max","min"];
    const apexFunc = ["date","substring","substr","num"];
    const Reg$ = /\$/gi
    let text = value;
    text = text.indexOf("$")>-1?text.replace(Reg$,"'\&'\ $ '\&'"):text;
    setFormatted(text);
    
  }

  return(
    <React.Fragment>
    <div className={"var-input"}>
        <textarea ref={textRef} onChange = {(e)=>handleChange(e)}></textarea>
        <button className={"button-prm"} onClick={reset}>Reset</button>
        {value===""?<button className="disabled-btn" disabled>Formatta Variabile</button>
        :<button className={"button-prm"} onClick={format}>Formatta Variabile</button>}
    </div>
    
    {formattedValue===""?<div className={["var-output","Close"].join(" ")}>{formattedValue}</div>
    :<div className={["var-output","Open"].join(" ")}><p>{formattedValue}</p></div>}

    </React.Fragment>
  )
}

export default VariableFormatter;