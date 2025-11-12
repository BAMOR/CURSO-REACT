import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { Toaster } from 'sonner'
// import { TasksApp } from './05-useReducer/TaskApp'
// import { ScrambleWords } from './05-useReducer/ScrambleWords'
// import { MemoHook } from './06-memos/MemoHook'
// import { MemoCounter } from './06-memos/MemoCounter'
// import { InstagromApp } from './07-useOptimistic/IntragromApp'
// import { ClientInformation } from './08-use-suspense/ClientInformation'
// import { getUserAction } from './08-use-suspense/api/get-user-action'
import { ProfessionalApp } from './09-useContext/ProfessionalApp'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { PokemonPage } from './03-examples/pokemonPage'
//import { TrafficLightWithHook } from './o2-useEffect/TrafficLightWithHook'
// import { TrafficLightWithEffect } from './o2-useEffect/TrafficLightWithEffect'
// import { TrafficLight } from './01-useState/TrafficLight'
// import { HooksApp } from './HooksApp'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster/>
    {/* <PokemonPage/> */}
  {/*<TrafficLightWithHook/>*/}
    {/* <TrafficLightWithEffect/> */}
  {/* <TrafficLight/> */}
    {/* <HooksApp/> */}
    {/* <FocusScreen/> */}
    {/* <TasksApp/> */}
    {/* <ScrambleWords/> */}
    {/* <MemoHook/> */}
    {/* <MemoCounter/> */}
    {/* <InstagromApp/> */}

    {/* <Suspense fallback={(
      <div className=' bg-gradient flex flex-col'>
        <h1 className='text-2xl'>Cargando</h1>
      </div>
    )}>
    <ClientInformation getUser={getUserAction(1000)}/>

    </Suspense> */}

    <ProfessionalApp/>
  </StrictMode>,
)
