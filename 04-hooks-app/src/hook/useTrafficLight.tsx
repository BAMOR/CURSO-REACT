import { useEffect, useState } from "react";


const colors = {
        red: 'bg-red-500 animate-pulse',
        yellow: 'bg-yellow-500 animate-pulse',
        green: 'bg-green-500 animate-pulse',


    };

// type TrafficLightColors = 'red'| 'yellow'| 'green';

type TrafficLightColors = keyof typeof colors;


export const useTrafficLight = () => {

    const [ligth, setLigth] = useState<TrafficLightColors>('red');
    
        // countdow effect
        const [countdown, setCountdown] = useState(5)
    
        useEffect(()=>{
    
          if(countdown === 0)return;
    
          console.log(countdown);
          const intervalId =setInterval(()=>{
            
            setCountdown((prev)=>prev -1);
            
          },1000);
          return()=>{
        
            clearInterval(intervalId)
          };
          
        },[countdown]);
    
        //change ligth color effect
        useEffect(()=>{
    
          if(countdown > 0 )return;
    
          if(countdown === 0){
            setCountdown(5);
            if(ligth === 'red'){
            setLigth('green');
            return;
          };
           if(ligth === 'yellow'){
            setLigth('red');
            return;
          }
           if(ligth === 'green'){
            setLigth('yellow');
            return;
          };
         
          }
    
    
        },[countdown, ligth])

        return{
            countdown,
            ligth,
            colors
        }

}

