import React from "react";
import "../styles/user-data.css"
export const UserData=({onSubmit,isDisabled,myref1,myref2})=>{
    return (
        <div className="data-container">
            <form onSubmit={onSubmit}>
                <div className="input-box first">
                    <label htmlFor="main-input">First Year </label>
                    <input ref={myref1} name="main" id="main-input" type={"text"} required={true} pattern="[0-9]+" disabled={isDisabled} tabIndex="-1"/>
                </div>
                <div className="input-box second">
                    <label htmlFor="secondary-input">Second Year (optional)</label>
                    <input ref={myref2} name="secondary" id="secondary-input" type={"text"} pattern="[0-9]+" disabled={isDisabled}/>
                </div>
                <button type="submit">confirm</button>
            </form>
        </div>
    )
}