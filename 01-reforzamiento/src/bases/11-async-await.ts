import type { GiphyRandomResponse } from "./data/piphy.response";



const API_KEY = 'sJFY7iIwqQ3joOxsOjuKUvUYdtHpVKfY';





const createImageInsideDom = (url:string) =>{
      const imgElement = document.createElement('img')
     imgElement.src = url;

    document.body.append(imgElement)

}


const getRamdomGifUrl = async():Promise<string> =>{

    const response = await fetch(
        `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);

        const {data}: GiphyRandomResponse = await response.json();

        



    return data.images.original.url;


}

getRamdomGifUrl().then(
    url => createImageInsideDom(url));
