import { heroApi } from "../api/hero.api"
import type { Hero } from "../types/hero.interface";

interface Options{
    name?:string,
    team?:string,
    category?:string,
    univeerse?:string,
    status?:string,
    strength?:string,
}

const BASE_URL = import.meta.env.VITE_API_URL;

export const searchHeroAction = async(options:Options = {}) =>{

    const {name,team,category,univeerse,status,strength} = options;

    if(!name && !team && !category && !univeerse && !status && !strength ){
        return [];
    }
    

    const {data} = await heroApi.get<Hero[]>('/search', {
        params:{
            name,
            team,
            category,
            univeerse,
            status,
            strength

        }

    });

    return data.map(hero => ({
        ...hero,
         image: `${BASE_URL}/images/${hero.image}`
    }))
}