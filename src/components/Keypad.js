// Code Keypad Component Here
import React from 'react'

function Keypad() {
    // function handleOnChange(){
    //     console.log("Entering password...");
    // }
   
  return (
    <div>
         {/* <input type="password" onChange={handleOnChange}></input> */}
         <input type="password" onChange={(e)=>{
console.log("Entering password...");
         }}/>
    </div>
  )
}

export default Keypad;

