


const API_KEY = 'sJFY7iIwqQ3joOxsOjuKUvUYdtHpVKfY';

const myRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);



myRequest
.then((Response)=>Response.json())

.then ((data) => {
    const imageURL = data.data.images.original.url;
    console.log(imageURL)

    const imgElement = document.createElement('img')
    imgElement.src = imageURL

    document.body.append(imgElement)
})

.catch((err)=>{

    console.error(err);

})