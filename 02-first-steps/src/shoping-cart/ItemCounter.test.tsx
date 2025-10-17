import { describe, expect, test } from "vitest";
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


    })

    test('should decrease count when -1 button is press and quantity is 1', () => {


    })


})