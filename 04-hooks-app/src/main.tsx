import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { TrafficLightWithHook } from './o2-useEffect/TrafficLightWithHook'
// import { TrafficLightWithEffect } from './o2-useEffect/TrafficLightWithEffect'
// import { TrafficLight } from './01-useState/TrafficLight'
// import { HooksApp } from './HooksApp'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TrafficLightWithHook/>
    {/* <TrafficLightWithEffect/> */}
  {/* <TrafficLight/> */}
    {/* <HooksApp/> */}
  </StrictMode>,
)
