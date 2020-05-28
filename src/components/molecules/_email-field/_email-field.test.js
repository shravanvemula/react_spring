import React from "react";
import { create } from "react-test-renderer";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Email from "./_email-field";

describe("Email component", () => {
    test("Matches the snapshot", () => {
        const email = create(<Email />);
        expect(email.toJSON()).toMatchSnapshot();
    });
    test("label should be email", () => {
        const { getByTestId } = render(<Email />);
        expect(getByTestId("emailLabel")).toHaveTextContent("");
    });
    test("onChange event for email", () => {
        const { getByTestId } = render(<Email />);
        const emailInput = getByTestId("emailInput");
        expect(emailInput).toHaveValue("");
        fireEvent.change(emailInput, {
            target: { value: "vishwas@gmail.com" }
        });
        expect(emailInput).toHaveValue("vishwas@gmail.com");
    });
});