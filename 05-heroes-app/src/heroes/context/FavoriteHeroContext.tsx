import { createContext, useEffect, useState, type PropsWithChildren } from "react";
import type { Hero } from "../types/hero.interface";



interface FavoriteHeroContext {
    //stats
    favorites: Hero[];
    favoriteCount: number;


    //methods
    isFavorites: (hero: Hero) => boolean;
    toggleFavorite: (hero: Hero) => void;
}


export const FavoriteHeroContext = createContext({} as FavoriteHeroContext);



const getFavoritesFromLocalStorage = ():Hero[] =>{
        const favorites = localStorage.getItem('favorites');
    return favorites ? JSON.parse(favorites):[];
}




export const FavoriteHeroProvider = ({ children }: PropsWithChildren) => {


    const [favorites, setfavorites] = useState<Hero[]>(getFavoritesFromLocalStorage)

    const toggleFavorite = (hero: Hero) => {
        setfavorites(prev => {
            const exists = prev.some(h => h.id === hero.id);
            if (exists) {
                return prev.filter(h => h.id !== hero.id);
            } else {
                return [...prev, hero];
            }
        });
    };

    const ifFavorite = (hero: Hero) => {
        return favorites.some((h) => h.id === hero.id)
    }

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))


    }, [favorites])

    return (
        <FavoriteHeroContext
            value={{
                //stats
                favoriteCount: favorites.length,
                favorites: favorites,

                //methods
                isFavorites: ifFavorite,
                toggleFavorite: toggleFavorite
            }}

        >

            {children}


        </FavoriteHeroContext>

    )
}
