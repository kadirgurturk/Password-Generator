import { useState } from "react";
import { FaCopy } from "react-icons/fa";
import { IconContext } from 'react-icons';

const PasswordPut = ({password}) =>{
    const [copied,setCopied] = useState(false);



    const afterCopied = () =>{

        setCopied(true)

        setTimeout(()=>{ setCopied(false)},1500)

    }

    const handleClick = () =>{
        
        if(password !== undefined){
            navigator.clipboard.writeText(password);

            afterCopied();
        
    }
}

    return(
        <div onClick={handleClick} className="PasswordPut">
            <input placeholder="P4$5W0rD!"type="text" value={password} disabled ></input><span className="input-icon">{copied && <span style={{color:"#a4ffaf", marginRight:"8px"}}>Copied</span>}<FaCopy fill="#a4ffaf"/></span>
        </div>
    )
}

export default PasswordPut;