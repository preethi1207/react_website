import React, { useState,useMemo } from 'react'

export default function Memo() {
   const [inputValue,setInputValue]=useState(" ");
  const expensiveCalculation=(data)=>{
    console.log("Performing calculation");
      return data.toUpperCase();
  };

  const memoizedResult=useMemo(()=>expensiveCalculation(inputValue),[inputValue]);
  return (
    <div><label>Data
      <input type="text"value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
      </label>
        <p>Original data:{inputValue}</p>
        <p>MemoizedResult:{memoizedResult}</p>
    </div>
  )
}
