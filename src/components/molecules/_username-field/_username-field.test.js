import React from 'react';
import { create } from "react-test-renderer";
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Username from './_username-field';

describe("Username component", () => {
    test("Matches the snapshot", () => {
        const username = create(<Username />);
        expect(username.toJSON()).toMatchSnapshot();

    })
    test("label should be ", () => {
        const { getByTestId } = render(<Username />);
        expect(getByTestId('usernameLabel')).toHaveTextContent('');

    });
    test("onChange event for username", () => {
        const { getByTestId } = render(<Username />);
        const usernameInput = getByTestId('usernameInput');
        expect(usernameInput).toHaveValue('');
        fireEvent.change(usernameInput, { target: { value: 'vishwas' } });
        expect(usernameInput).toHaveValue('vishwas');

    });

});