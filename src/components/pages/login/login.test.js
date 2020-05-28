import React from 'react';
import { create } from "react-test-renderer";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Login from './login';

describe("Login Page",() =>{
     test("Matches the snapshot",() => {
        const login = create( <Login /> );
         expect(login.toJSON()).toMatchSnapshot();

     })
    test("should have background image",() => {
        const { getByTestId } = render(<Login />);
        expect(getByTestId('backgroundImage')).toBeInTheDocument();
        
    });
    test("should have heading as Login",() => {
        const { getByTestId } = render(<Login />);
        expect(getByTestId('heading')).toHaveTextContent('Log in');
        
    });


});