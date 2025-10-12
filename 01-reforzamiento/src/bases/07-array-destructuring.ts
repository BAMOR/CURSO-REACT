


const characterNames = ['Goku', 'Vegeta', 'Trunks'];


const [, , p3] = characterNames;


console.log({p3});


const returnArrayfn = () => {

    return ['ABC', 123] as const;
}


const [letters, numbers] = returnArrayfn();

console.log(numbers + 100);



const useState2 = () =>{

    
}

function useState (name:string) {

    const setName = (newValue:String) =>{
        console.log(newValue);
    };

    return [name, setName] as const; 
}

const [name, setName] = useState('Goku2');

console.log(name);

setName('vegueta2')