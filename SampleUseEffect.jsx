import { useState, useEffect } from "react";

function SampleUseEffect() {
    const [counter,setCounter]=useState(0);
    const [pointer, setpointer]=useState(100);
    useEffect(() => {
        console.log("UseEffect executed....");
        console.log("Counter ="+ counter) ; 
        console.log("Pointer="+pointer);
       }, [counter, pointer] );
        
       
    function setCount (){
            setCounter(counter+5);
            }
            
    function setPointer(){
        setpointer(pointer-5)
    }

    return (
        <div>
            <h2 style={{color:'brown'}}>SampleUseEffect</h2>
            <h1>  Counter Value ={counter} </h1>
            <h1>  Pointer value={pointer}  </h1>
            <button onClick={() => setCount(counter + 5)}>
                Increase
            </button>
            <button onClick={() => setpointer(pointer-5)}>
                Decrease pointer</button>
        </div>
    );
}

export default SampleUseEffect;