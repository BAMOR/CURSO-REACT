
import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import { CustomHeader } from './CustomHeader';


const title = 'gits App';

describe('CustomHeader', () => {
    test('should render the title correctly', () => {

        render(<CustomHeader tittle={title} />)

        // screen.debug();

        expect(screen.getByText(title)).toBeDefined();

    });

    test('should render description when provider', () => {
        const description = 'Test description';
        render(<CustomHeader tittle={title} description={description} />);

        // screen.debug()
        expect(screen.getAllByText(description)).toBeDefined();

        expect(screen.getByRole('paragraph')).toBeDefined();
        expect(screen.getByRole('paragraph').innerHTML).toBe(description);
        
    });

    test('should not render description when not provided', () => {
        const{container} = render(<CustomHeader tittle={title} />);

  

        const divElement = container.querySelector('.content-center')

        const h1 = divElement?.querySelector('h1');
        expect(h1?.innerHTML).toBe(title);

        const p = divElement?.querySelector('p');
        expect(p).toBeNull();

        

        

    });

});