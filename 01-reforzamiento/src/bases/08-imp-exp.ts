import { heroes, Owner, type Hero } from "./data/heroes.data";




const getHeroById = (id: number): Hero | undefined => {


    const hero = heroes.find((hero) => {
        return hero.id === id
    });

    return hero

};

console.log(getHeroById(3))



export const getHeroesByOwner = (owner:Owner):Hero[] | undefined => {

    const hero = heroes.filter((hero) => {
        return hero.owner ===owner;
    })

    return hero;
}
