import { describe, expect, it, test } from "vitest";
import { fireEvent, render, screen } from '@testing-library/react'
import { ItemCounter } from "./ItemCounter";


describe('ItemCounter', () => {
    test('should render with default values', () => {
        const name = 'Control de nintendo'
        render(<ItemCounter name={name} />)


        expect(screen.getByText(name)).toBeDefined();
        expect(screen.getByText(name)).not.toBeNull();
    })

    test('should render with custom quantity', () => {
        const name = 'Control de nintendo'
        const quantity = 10;
        render(<ItemCounter name={name} quantity={quantity} />)


        expect(screen.getByText(quantity)).toBeDefined();

    })

    test('should increase count when +1 button is press', () => {

        render(<ItemCounter name={'test item'} quantity={1} />)

        const [buttonAdd] = screen.getAllByRole('button');

        screen.debug()

        fireEvent.click(buttonAdd)

        expect(screen.getByText('2')).toBeDefined()

    })


    test('should decrease count when -1 button is press', () => {
        render(<ItemCounter name={'test item'} quantity={5} />)
        const buttonSubtract = screen.getByText('-1')
        fireEvent.click(buttonSubtract)
        expect(screen.getByText('4')).toBeDefined()
    })

    test('should not decrease below 1', () => {
        render(<ItemCounter name={'test item'} quantity={1} />)
        const buttonSubtract = screen.getByText('-1')
        fireEvent.click(buttonSubtract)
        expect(screen.getByText('1')).toBeDefined()
    })


    test('should change to red when count is one', () =>{
        const quantity = 1;
        const name = 'test item';

        render(<ItemCounter  name={name} quantity={quantity}/>);

        const itemText = screen.getByText(name);

       expect(itemText.style.color).toBe('red');


    } )


        test('should change to red when count is grater than 1', () =>{
        const quantity = 2;
        const name = 'test item';

        render(<ItemCounter  name={name} quantity={quantity}/>);

        const itemText = screen.getByText(name);

       expect(itemText.style.color).toBe('black');


    } )
    

})