import React, {useContext, useState} from "react";
import {dataContext} from "../index";
const One =()=>{
  const data = useContext(dataContext);
  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  return(
    <div>
      <p>{data.getDates()}</p>
      <input type="text" placeholder="Nombre" value={name} onChange={e=>setName(e.target.value)}/>
      <input type="text" placeholder="Apellido" value={firstName} onChange={e=>setFirstName(e.target.value)}/>
      <button onClick={()=>data.actionOne(name, firstName)}>Registrar</button>
      <button onClick={()=>data.clearStorage()}>Limpiar</button>
    </div>
  )
}
export default One;