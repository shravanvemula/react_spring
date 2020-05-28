import React from 'react';
import { create } from "react-test-renderer";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Logo from './logo';

describe("Logo component",() =>{
    test("Matches the snapshot",() => {
        const logo = create(<Logo />);
        expect(logo.toJSON()).toMatchSnapshot();

    })
    test("logo image should be displayed",() =>{
            const {getByTestId} = render(<Logo />);
            expect(getByTestId('logoImage')).toBeInTheDocument();

    });
    test("Title should be Todo",() => {
        const { getByTestId } = render(<Logo />);
        expect(getByTestId('title')).toHaveTextContent('Todo');
        
    });

});