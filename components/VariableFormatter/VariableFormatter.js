import React,{useState,useEffect} from 'react'
import './VariableFormatter.css'


const VariableFormatter = props =>{
  const [value,setValue] = useState("");
  const [formattedValue,setFormatted] = useState("");

const handleChange = evt =>
{
  const val = evt.target.value;
  setValue(val);
}
  const format = ()=>
  {
    const aggrFunc = ["sum","avg","max","min"];
    const apexFunc = ["date","substring","substr","num"];
    const Reg$ = /(\$)/gi
    let text = value;
    text = text.indexOf("$")>-1?text.replace(Reg$,`'&'\$'&'`):text;
    setFormatted(text);
    
  }

  return(
    <React.Fragment>
    <div className={"var-input"}>
        <textarea onChange = {(e)=>handleChange(e)}></textarea>
        {value===""?<button className="disabled-btn" disabled>Formatta Variabile</button>
        :<button className={"button-prm"} onClick={format}>Formatta Variabile</button>}
    </div>
    
    {formattedValue===""?<p className={["var-output","Closed"].join(" ")}>{formattedValue}</p>
    :<p className={["var-output","Open"].join(" ")}>{formattedValue}</p>}

    </React.Fragment>
  )
}

export default VariableFormatter;