
import { useState } from "react"
import { mockGifs } from "./data/ gifs.mock"
import { GifList } from "./gifs/components/GifList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"


export const GifsApp = () => {
    const [previousTerms, setPreviousTerms] = useState(["dragon ball z"]);

    const handleTermClicked = (term: string) => {

        console.log({term})
    }

    return (
        (
            <>

                {/* header */}
               <CustomHeader tittle={"Buscador de Gifs"} description={"Descubre y Comparte el gif perfecto"}/>

                {/* Search */}
               <SearchBar placeholder={"Busca lo que quieras"}/>

                {/* Busquedas Previas */}
               <PreviousSearches searches={previousTerms} onLabelClicked={handleTermClicked}/>

                {/* Giifs */}
                <GifList gifs={mockGifs}/>

               

            </>
        )
    )
}
