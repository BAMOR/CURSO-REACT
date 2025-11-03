import { useState } from "react";
import type { Gif } from "../../interfaces/gif.interface";
import { getGifsByQuery } from "../components/actions/get-gifs-by-query.actions";


export const useGifs = () => {

    const [gifs, setGifs] = useState<Gif[]>([]);
        const [previousTerms, setPreviousTerms] = useState<string[]>([]);
    
        const handleTermClicked = (term: string) => {
            console.log({term})
        }
    
    const handleSearch = async(query: string) => {
    
         query = query.toLowerCase().trim();
    
        if(query.length===0)return;
    
        if(previousTerms.includes(query))return;
    
        setPreviousTerms([query, ...previousTerms].slice(0,8))
    
        const gifs  = await getGifsByQuery(query);
    
        console.log(gifs)
    
        setGifs(gifs)
       
    
    };


  return {

    // props
    gifs,
    previousTerms,

    //actions
    handleTermClicked,
    handleSearch



  }
}
