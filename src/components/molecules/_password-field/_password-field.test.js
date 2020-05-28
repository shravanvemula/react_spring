import React from "react";
import { create } from "react-test-renderer";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Password from "./_password-field";

describe("Password component", () => {
    test("Matches the snapshot", () => {
        const password = create(<Password />);
        expect(password.toJSON()).toMatchSnapshot();
    });
    test("label should be password", () => {
        const { getByTestId } = render(<Password />);
        const passwordLabel = getByTestId("passwordLabel");
        expect(passwordLabel).toHaveTextContent("");
    });
    test("onChange event for password should be handled", () => {
        const { getByTestId } = render(<Password />);
        const passwordInput = getByTestId("passwordInput");
        expect(passwordInput).toHaveValue("");

        fireEvent.change(passwordInput, { target: { value: "12345678" } });
        expect(passwordInput).toHaveValue("12345678");
    });
});