import React from "react";
import '../styles/result.css'
export const Result=({res,className,show,onAgain})=>{
    return (
        <div className={`result-wrapper ${className}`}>
            <div className={`result ${show}`}>
                {res.map((el,index)=><div key={index} style={{textAlign:"center",background:"rgba(0,0,0,.8)",borderBottom:"1px solid whitesmoke",color:"white"}}>{el}</div>)}
            </div>
            <button onClick={onAgain}>again</button>
        </div>
    )
}