import React from 'react';
import { create } from "react-test-renderer";
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SecondarySignUpForm from './_secondary-sign-up-form';

describe("SecondarySignUpForm component", () => {
    test("Matches the snapshot", () => {
        const secondarySignUpForm = create(<SecondarySignUpForm />);
        expect(secondarySignUpForm.toJSON()).toMatchSnapshot();

    })
    test("onChange event for password", () => {
        const { getByTestId } = render(<SecondarySignUpForm />);
        const passwordInput = getByTestId('passwordInput');
        expect(passwordInput).toHaveValue('');
        fireEvent.change(passwordInput, { target: { value: '12345678' } });
        expect(passwordInput).toHaveValue('12345678');

    });
    test("onChange event for username", () => {
        const { getByTestId } = render(<SecondarySignUpForm />);
        const usernameInput = getByTestId('usernameInput');
        expect(usernameInput).toHaveValue('');
        fireEvent.change(usernameInput, { target: { value: 'vishwas' } });
        expect(usernameInput).toHaveValue('vishwas');

    });
    test("onChange event for checkbox", () => {
        const { getByTestId } = render(<SecondarySignUpForm />);
        const checkbox = getByTestId('checkbox');
        fireEvent.click(checkbox);
        expect(checkbox).toBeEnabled();

    });
    test("signUp button is disabling for invalid username input", () => {
        const { getByTestId, getByText } = render(<SecondarySignUpForm />);
        const usernameInput = getByTestId('usernameInput');

        fireEvent.change(usernameInput, { target: { value: '' } });
        expect(getByTestId('submit')).toBeDisabled();


    });
    test("signUp button is disabling for invalid password input", () => {
        const { getByTestId, getByText } = render(<SecondarySignUpForm />);
        const passwordInput = getByTestId('passwordInput');

        expect(getByTestId('submit')).toBeDisabled();
        fireEvent.change(passwordInput, { target: { value: '1234' } });
        expect(
            getByText("Your password must be atleast 8 characters long")
        ).toBeInTheDocument();


    });

    test("signUp button is disabled for unchecked checkbox", () => {
        const { getByTestId } = render(<SecondarySignUpForm />);
        const checkboxInput = getByTestId('checkbox');
        const passwordInput = getByTestId('passwordInput');
        const usernameInput = getByTestId('usernameInput');
        fireEvent.change(usernameInput, { target: { value: 'vishwas' } });
        fireEvent.change(passwordInput, { target: { value: '123456789' } });

        expect(getByTestId('submit')).toBeDisabled();

    });


    test("signUp button is enabled  for valid password,valid username and checked checkbox", () => {
        const { getByTestId } = render(<SecondarySignUpForm />);
        const checkboxInput = getByTestId('checkbox');
        const passwordInput = getByTestId('passwordInput');
        const usernameInput = getByTestId('usernameInput');

        fireEvent.change(usernameInput, { target: { value: 'vishwas' } });
        fireEvent.change(passwordInput, { target: { value: '123456789' } });
        fireEvent.click(checkboxInput);
        expect(getByTestId('submit')).toBeEnabled();

    });

    test("Login link should be in the form", () => {
        const { getByTestId } = render(<SecondarySignUpForm />);
        expect(getByTestId('loginLink')).toBeInTheDocument();
        expect(getByTestId('loginLink')).toHaveTextContent('Go to login');

    });


}
);