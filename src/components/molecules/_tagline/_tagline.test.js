import React from 'react';
import { create } from "react-test-renderer";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Tagline from './_tagline';

describe("Tagline component",() =>{
    test("Matches the snapshot",() => {
        const tagline = create(<Tagline />);
        expect(tagline.toJSON()).toMatchSnapshot();

    })
    test("it shows the expected text",() => {
        const { getByTestId } = render(<Tagline />);
        const textContent = getByTestId('caption');
        expect(textContent).toHaveTextContent('Remember everything that matters');
        
    });

});