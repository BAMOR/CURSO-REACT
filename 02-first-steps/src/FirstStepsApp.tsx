import { ItemCounter } from "./shoping-cart/ItemCounter";

interface ItemInCart {
    productName: string;
    quantity: number;
}

const itemsInCart: ItemInCart[] = [
    { productName: 'Nintendo Switch 2', quantity: 1 },
    { productName: 'Pro Controller', quantity: 2},
    { productName: 'Super Smash', quantity: 3 },
    { productName: 'Super Mario', quantity: 3 },
]


export function FirstStepsApp() {

    return (
        <>

            <h1>Carrito de Compras</h1>

            {itemsInCart.map((item) => (
                <ItemCounter name={item.productName} quantity={item.quantity} key={item.productName} />
            ))}

            {/* <ItemCounter name = "Nintendo Switch 2" quantity={10}/>
        <ItemCounter name = "Pro Controller" quantity={30}/>
        <ItemCounter name = "Super Smash" quantity={40}/>
        <ItemCounter name = "Super Mario" quantity={59}/> */}


        </>
    )

}