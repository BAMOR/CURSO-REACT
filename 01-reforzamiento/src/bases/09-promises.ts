const myPromise = new Promise<number>((resolve, reject) => {


    setTimeout(()=>{

       // resolve(100)
        reject('mi amigo se perdio')

    }, 2000)

})

myPromise.then((myMoney) =>{
    console.log(`Tengo mi dienero ${myMoney}`);
}).catch((reason)=>{
    console.warn(reason)
}).finally(()=>{
    console.log('pues a seguir con la vida')
})



