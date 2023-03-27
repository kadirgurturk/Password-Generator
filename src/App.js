import './style/app.css'
import boxes from "./list/lettesAndSymbols"
import { useEffect, useState } from 'react';
import StrenghtBar from './component/StrengthBar';
import PasswordPut from './component/PasswordPut';
import { AiOutlineArrowRight } from "react-icons/ai";
import { IconContext } from 'react-icons';

function App() {
  const [passLength, setPassLength] = useState(14)
  const [password,setPassword] = useState()
  const [totalArray,setTotalArray] = useState([]);
  const [checkBoxes,setCheckBoxes] = useState(boxes)
  const [width, setWidth] = useState(378/2)

  useEffect(()=>{

    setWidth(((100* (passLength - 8) / (20 - 8))))
  },[passLength])

  const generatePassword = () =>{

    let pass = "";

    const arr = totalArray.flat();

    for(let i = 0; i < passLength ; ++i){
      pass += arr[randomNumber(arr.length)]
    }

    setPassword(pass)

  }

  const SliderBackGorund = () =>{
    return(
      <div style={{position :"absolute", zIndex:"1", top:"0" ,marginTop:"auto", marginBottom:"auto", bottom:"-8px", height:"8px", width:`${width}%`, backgroundColor:"#a4ffaf"}}>
      </div>
    )
  }

  const randomNumber = (l) =>{
    return Math.floor(Math.random() *  l);
  }

  const changeHandler = (box) =>{
      let sId = box.id;

      setCheckBoxes(checkBoxes.map(b => {
      if(b.id === sId){
        b.checked = !b.checked;
        if(b.checked){setTotalArray([...totalArray,b.values])
        }else{
          setTotalArray(totalArray.filter(arr => {return arr[0] !== b.values[0]}))
        }
      }
         return b}))
  }
  

  return (
    <div className="App">
      <div className='container'>
        <h4>Password Generator</h4>
        <PasswordPut password={password}/>
        <div className='container-body'>
          <div className='bar'> 
            <div className='lenght'> <span >Character Length </span>  <span >{passLength}</span></div>  
            <div className='slider'><SliderBackGorund/><input className='range' type='range' min="8" max = "20" step="1" value={passLength} onChange={(e)=>{setPassLength(e.target.value)}}></input></div>
          </div>
          <div className='checkboxes'>{checkBoxes.map(box => (
            <div className='checkbox' key={box.id} onClick = {()=>{changeHandler(box)}}> 
              <input type="checkbox" value={box.name} checked={box.checked}/> <span>{box.name}</span>
            </div>))}
          </div>
          <StrenghtBar totalArray={totalArray} />
          <button onClick={generatePassword} className="generate-button" disabled={totalArray.length === 0}>GENERATE <AiOutlineArrowRight className='generate-icon'/></button>
        </div>
      </div>
    </div>
  );
}

export default App;
