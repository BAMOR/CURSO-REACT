
import { useState } from "react"

import { GifList } from "./gifs/components/GifList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"
import { getGifsByQuery } from "./gifs/components/actions/get-gifs-by-query.actions"
import type { Gif } from "./interfaces/gif.interface"


export const GifsApp = () => {
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


    return (
        (
            <>

                {/* header */}
               <CustomHeader tittle={"Buscador de Gifs"} description={"Descubre y Comparte el gif perfecto"}/>

                {/* Search */}
               <SearchBar placeholder={"Busca lo que quieras"} onQuery ={handleSearch}/>

                {/* Busquedas Previas */}
               <PreviousSearches searches={previousTerms} onLabelClicked={handleTermClicked}/>

                {/* Giifs */}
                <GifList gifs={gifs}/>

               

            </>
        )
    )
}
