import './App.css';
import {UserData} from './components/user-data.js';
import { Result } from './components/result';
import React from 'react';
function App() {
  const [result,setResult]=React.useState([])
  const [disappear,setDisappear]=React.useState(
    {
      wrapper: "",
      input: false,
      show: ""
    }
  )
  const inputRef1=React.useRef(null)
  const inputRef2=React.useRef(null)
  const again=()=>{
    setResult(()=>[])
    setDisappear(prev=>{
      return{
        wrapper:"godown",
        input:false,
        show:"hide"
      }
    })
    inputRef1.current.value=""
    inputRef2.current.value=""
  }
  const handleSubmit=(event)=>{
    event.preventDefault()
    console.log("clicked")
    const x1=Number(event.target.main.value)
    const x2=Number(event.target.secondary.value)
    const detectTime=(start,end)=>{
      end=end===0?start:end
      setResult([...Array((Math.abs(end-start)+1)*12).keys()].filter(val=>new Date(start, val, 13).getDay()===5)
      .map(val=>`${val%12+1}/13/${start+val/12^0}`))
    }
    detectTime(x1,x2)
    setDisappear(prev=>{
      return {wrapper: "goup",input: true,show:"show"}
    })
  }
  return (
    <React.Fragment>
      <Result res={result} className={`${disappear.show}`} show={disappear.show} onAgain={again}/>
      <div className={`wrapper ${disappear.wrapper}`}>
        <UserData onSubmit={handleSubmit} isDisabled={disappear.input} myref1={inputRef1} myref2={inputRef2} />
      </div>
    </React.Fragment>
  );
}

export default App;
