import { useCounter } from "@/hook/useCounter"
import { useMemo } from "react";


const heavyStuff=(iterationNumber:number)=>{
  console.time('heavy stuff started');

  for (let index = 0; index < iterationNumber; index++) {
    console.log('ahi vamos....')
    
  }
  
  
  
  console.timeEnd('heavy stuff started');

  return `${iterationNumber} iteraciones realizadas`
}


export const MemoCounter = () => {

    const {counter, increment}=useCounter(40);
    const {counter:counter2, increment:increment2}=useCounter(10);
    const myHeaviValue = useMemo(()=>heavyStuff(counter),[counter])

  return (
    <div className="bg-gradient flex flex-col gap-">



        <h1 className="text-2xl font-bold">Memo - useMemo - {myHeaviValue}</h1>


        <h4>counter:{counter}</h4>
        <h4>counter:{counter2}</h4>

        <button
        className="bg-blue-500 text-white px-4 rounded-md py-2 cursor-pointer"
        onClick={increment}
        >+1</button>

        <button
        className="bg-blue-500 text-white px-4 rounded-md py-2 cursor-pointer"
        onClick={increment2}
        >+1 - counter2</button>
    </div>
    
  )
}
