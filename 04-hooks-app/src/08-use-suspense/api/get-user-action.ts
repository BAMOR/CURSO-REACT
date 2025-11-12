
export interface User{
    id:number;
    name:string;
    location:string;
    role:string;
}

export const getUserAction=async(id:number)=>{
    console.log('funcion llamada')

    await new Promise(res=> setTimeout(res,2000));
    console.log('funcion terminada')

    return{
        id:id,
        name: 'Paulo Barahona',
        location:'ottawa canada',
        role:'instructor de sofware'

    }

}