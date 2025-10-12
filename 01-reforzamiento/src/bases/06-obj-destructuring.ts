

const person: Hero = {
    name: 'tony',
    age: 45,
    key: 'Ironman'
}


const {name:ironmanName, age:ageIronmam, key} = person; 

console.log(ironmanName,ageIronmam, key);

interface Hero{
    name: String,
    age:  Number,
    key: String,
    rank?: String
}

const useContext = ({key, name, age, rank}: Hero) =>{
    return{
        keyName: key,
        user:{
            name,
            age,

        },
        rank,
    }
}

const {
    rank,
    keyName, 
    user,
 } = useContext(person);
 const {name, age} = user

console.log({rank,keyName, name, age})

