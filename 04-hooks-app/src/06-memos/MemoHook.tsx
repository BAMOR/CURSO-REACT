import React, { useState } from "react"
import { MyTitle } from "./ui/MyTitle"
import { MySubTitle } from "./ui/MySubTitle"


// const handleMyAPICall= (myValue:string)=>{
//     console.log(myValue)

// }

export const MemoHook = () => {

    
    const [title, setTitle] = useState('hola')
    const [subtTitle, setSubTitle] = useState('mundo')

    const handleMyAPICall=React.useCallback(()=>{
        console.log('llamar a mu api', subtTitle)

    },[subtTitle])
  return (
    <div className="bg-gradient flex flex-col gap-4">
        <h1 className="txt-2xl font-thin text-white">Memo App</h1>


        <MyTitle title={title}/>     

        <MySubTitle subTitle={subtTitle} 
        callMyAPI={()=>handleMyAPICall() }/>    
                


        

        <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        onClick={()=> setTitle('hello, ' + new Date().getTime())}
        >
            Cambiar titulo
        </button>


        <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        onClick={()=>setSubTitle('World')}
        >
            Cambiar subtitulo
        </button>
    </div>
   
  )
}
