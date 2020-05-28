import React from "react";
import { create } from "react-test-renderer";
import {
    render,
    fireEvent,
    getByTestId,
    getByPlaceholderText,
    getAllByRole
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ResetPasswordForm from "./_reset-password-form";
import fetchMock from "fetch-mock";

describe("ResetPasswordForm component", () => {
    // test("Matches the snapshot", () => {
    //     const ResetPasswordForm = create(<ResetPasswordForm />);
    //     expect(ResetPasswordForm.toJSON()).toMatchSnapshot();
    // });

    test("Password input field should be there", () => {
        const { getByText } = render(<ResetPasswordForm />);
        expect(getByText("Enter new password")).toBeInTheDocument();
    });

    test("Confirm password input field should be there", () => {
        const { getByText } = render(<ResetPasswordForm />);
        expect(getByText("Confirm your new password")).toBeInTheDocument();
    });

    test("Submit button should be there and disabled by default", () => {
        const { getByTestId } = render(<ResetPasswordForm />);
        expect(getByTestId("submit")).toBeInTheDocument();
        expect(getByTestId("submit")).toBeDisabled();
    });

    test("Helper text 1 should be in the form", () => {
        const { getByTestId } = render(<ResetPasswordForm />);
        expect(getByTestId("helperText1")).toBeInTheDocument();
        expect(getByTestId("helperText1")).toHaveTextContent(
            "Please enter a new password for your todo account"
        );
    });

    test("Helper text 2 should be in the form", () => {
        const { getByTestId } = render(<ResetPasswordForm />);
        expect(getByTestId("helperText2")).toBeInTheDocument();
        expect(getByTestId("helperText2")).toHaveTextContent(
            "Your password must be at 8 characters long. Avoid common words or patterns."
        );
    });

    test("Button is disabling for invalid password input", () => {
        const { getAllByRole, getByTestId } = render(<ResetPasswordForm />);

        const list = getAllByRole("button");
        expect(list.length).toEqual(3);

        const passwordField = list[0];
        const confirmPasswordField = list[1];

        expect(passwordField).toBeInTheDocument();
        fireEvent.change(passwordField, {
            target: { value: "12345" }
        });
        expect(passwordField).toHaveValue("12345");
        expect(getByTestId("submit")).toBeDisabled();

        expect(confirmPasswordField).toBeInTheDocument();
        fireEvent.change(confirmPasswordField, {
            target: { value: "123456" }
        });
        expect(confirmPasswordField).toHaveValue("123456");
        expect(getByTestId("submit")).toBeDisabled();
    });

    //Integration Part test
});
