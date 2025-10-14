import type { GiphyRandomResponse } from "./data/piphy.response";



const API_KEY = 'sJFY7iIwqQ3joOxsOjuKUvUYdtHpVKfY';

const myRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);



const createImageInsideDom = (url:string) =>{
      const imgElement = document.createElement('img')
     imgElement.src = url;

    document.body.append(imgElement)

}


myRequest
.then((Response)=>Response.json())

.then (({data}:GiphyRandomResponse) => {

    const imageUrl = data.images.original.url;
   
    createImageInsideDom(imageUrl)

  
})

.catch((err)=>{

    console.error(err);

})