import React from 'react';
import { create } from "react-test-renderer";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PrimarySignUp from './primary-sign-up';


describe("Primary SignUp Page", () => {
    test("Matches the snapshot", () => {
        const primarySignUp = create(<PrimarySignUp />);
        expect(primarySignUp.toJSON()).toMatchSnapshot();

    })
    test("should have background image", () => {
        const { getByTestId } = render(<PrimarySignUp />);
        expect(getByTestId('backgroundImage')).toBeInTheDocument();

    });
    test("should have heading as SignUp", () => {
        const { getByTestId } = render(<PrimarySignUp />);
        expect(getByTestId('heading')).toHaveTextContent('Sign Up');

    });
});
