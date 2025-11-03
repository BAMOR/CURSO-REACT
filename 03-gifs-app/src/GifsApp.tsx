
import { GifList } from "./gifs/components/GifList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { useGifs } from "./gifs/hooks/useGifs"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"



export const GifsApp = () => {

    const{gifs, handleSearch, handleTermClicked, previousTerms} = useGifs()


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
