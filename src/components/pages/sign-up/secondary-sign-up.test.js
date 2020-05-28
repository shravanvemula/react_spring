import React from 'react';
import { create } from "react-test-renderer";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SecondarySignUp from './secondary-sign-up';

describe("SecondarySignUp Page", () => {
    test("Matches the snapshot", () => {
        const secondarySignUp = create(<SecondarySignUp />);
        expect(secondarySignUp.toJSON()).toMatchSnapshot();

    })
    test("should have background image", () => {
        const { getByTestId } = render(<SecondarySignUp />);
        expect(getByTestId('backgroundImage')).toBeInTheDocument();

    });
    test("should have heading as Almost there", () => {
        const { getByTestId } = render(<SecondarySignUp />);
        expect(getByTestId('heading')).toHaveTextContent('Almost there');

    });


});