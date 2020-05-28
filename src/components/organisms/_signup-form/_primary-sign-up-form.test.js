import React from 'react';
import { create } from "react-test-renderer";
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PrimarySignUpForm from './_primary-sign-up-form';

describe("PrimarySignUpForm Component", () => {
    test("Matches the snapshot", () => {
        const primarySignUpForm = create(<PrimarySignUpForm />);
        expect(primarySignUpForm.toJSON()).toMatchSnapshot();

    })


    test("onChange event for email", () => {
        const { getByTestId } = render(<PrimarySignUpForm />);
        const emailInput = getByTestId('emailInput');
        expect(emailInput).toHaveValue('');
        fireEvent.change(emailInput, { target: { value: 'vishwas@gmail.com' } });
        expect(emailInput).toHaveValue('vishwas@gmail.com');

    });


    test("Login link should be in the form", () => {
        const { getByTestId } = render(<PrimarySignUpForm />);
        expect(getByTestId('loginLink')).toBeInTheDocument();
        expect(getByTestId('loginLink')).toHaveTextContent('Go to login');

    });


});