import React from "react";

export default function Saludar(props){
    const {userInfo, saludar} = props;
    const {name = "default", age, color} = userInfo;
    console.log(name,age,color);

    return(
        <div>
            <button onClick={()=>saludar(name)}>Saludar</button>
        </div>
    )
}