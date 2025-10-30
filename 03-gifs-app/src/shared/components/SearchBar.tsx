import React, { useEffect, useState } from "react"

interface Props{
    placeholder:string

    onQuery: (query:string) => void,
}

export const SearchBar = ({placeholder = "buscar", onQuery}:Props) => {

    const [query, setQuery] = useState('');

    useEffect (() => {

        const timeoutId = setTimeout(() =>{
            onQuery(query)
        }, 700);

        return () => {
            clearTimeout(timeoutId);
        }

    }, [query, onQuery ])

    const handleSearch = () =>{
        onQuery(query)

    };

    const handleKayDown = (event:React.KeyboardEvent<HTMLInputElement>) =>{
        if(event.key === 'Enter'){
            handleSearch();
        }
    }


    return (
        <div className="search-container">
            <input type="text"
             placeholder={placeholder} 
             value={query}
             onChange={(event) => setQuery(event.target.value)}
             onKeyDown={ handleKayDown }

             />
            <button onClick={handleSearch}>Buscar</button>
        </div>
    )
}
