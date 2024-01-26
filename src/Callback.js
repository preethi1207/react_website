import React,{useState,useCallback} from 'react';

const Callback=()=>{
    const[count , setCount]=useState(0);
    const handleClick=useCallback(() => {
        console.log(`Button clicked.count: ${count}`);
    },[count]);

 
  return (
    <div>
        <button onClick={handleClick}>Click me</button>
        <p>
            Count:{count}
        </p>
        <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
  };
export default Callback;