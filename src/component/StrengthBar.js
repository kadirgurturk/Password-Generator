import { useState } from "react";


const StrenghtBar = ({totalArray}) =>{
    const levels = [
        { message: "Too Weak!", bgc: "rgba(245, 39, 39, 0.8)" },
        { message: "Weak", bgc: "rgba(245, 109, 39, 0.8)" },
        { message: "Medium", bgc: "rgba(245, 212, 39, 0.8)" },
        { message: "Strong", bgc: "#a4ffaf" },
      ];

      let strenght = (totalArray.length);

      const Bars = () =>{

        return(
            <span>
                {levels.map((level,id) => { 
                   return <span className="strenght" style={{border:"1px solid white",padding:"6px 5px", margin:"5px" ,backgroundColor:id < strenght  ? levels.at(strenght -1).bgc :""}}> </span>
                })}
            </span>
        )
      }

    return(
        <div className="bar-container">
            <span>STRENGTH</span> <span> {strenght === 0 ? "SELECT AT LEAST 1" : levels[strenght - 1].message }</span>
            {strenght !== 0 && <Bars/>} 
        </div>
    )
}

export default StrenghtBar;