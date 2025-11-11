import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { FocusScreen } from './04-useRef/FocusScreen'
// import { PokemonPage } from './03-examples/pokemonPage'
//import { TrafficLightWithHook } from './o2-useEffect/TrafficLightWithHook'
// import { TrafficLightWithEffect } from './o2-useEffect/TrafficLightWithEffect'
// import { TrafficLight } from './01-useState/TrafficLight'
// import { HooksApp } from './HooksApp'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <PokemonPage/> */}
  {/*<TrafficLightWithHook/>*/}
    {/* <TrafficLightWithEffect/> */}
  {/* <TrafficLight/> */}
    {/* <HooksApp/> */}
    <FocusScreen/>
  </StrictMode>,
)
