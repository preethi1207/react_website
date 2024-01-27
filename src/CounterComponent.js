import React,{useRef,useEffect,useState} from "react";
const CounterComponent=()=>{
    const CounterRef=useRef(0);
    const[count,setCount]=useState(0);


useEffect(()=>{
    console.log(`Counter Ref:`,CounterRef.current);
},[count]);
const incrementCounter=()=>{
    CounterRef.current+=1;
    setCount((prevCount)=>prevCount+1);
};
    return (
        <div>
            <p>Counter Value(state):{count}</p>
            <button onClick={incrementCounter}>Decrement</button>
        </div>
    );
}
export default CounterComponent;