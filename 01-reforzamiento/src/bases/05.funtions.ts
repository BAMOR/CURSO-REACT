


function greet (name: String): string{

    return `Hola ${name}`;
}

const greet2 = (name:string) =>  `Hola ${name}`;



const message = greet('juan')
console.log(message);

const message2 = greet2('pablo')
console.log(message2);


interface User{
    uid: String,
    username: String,
}

function getUser (): User {
        return {
            uid: 'ABC-123',
        username: 'El_papito',
        
    }
}


const user = getUser;
console.log(user)

const getUser2 = () => ({
        uid: 'ABC-12322',
        username: 'El_papito2',
    })


const user2 = getUser2;

console.log(user2)


const myNumbers: number[] =[1,2,3,4,5,6];

myNumbers.forEach( console.log)
