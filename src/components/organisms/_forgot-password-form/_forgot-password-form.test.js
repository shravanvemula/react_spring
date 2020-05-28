import React from "react";
import { create } from "react-test-renderer";
import { render, fireEvent, getByTestId } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ForgotPasswordForm from "./_forgot-password-form";
import fetchMock from "fetch-mock";

describe("ForgotPasswordForm component", () => {
    // test("Matches the snapshot", () => {
    //     const ForgotPasswordForm = create(<ForgotPasswordForm />);
    //     expect(ForgotPasswordForm.toJSON()).toMatchSnapshot();
    // });

    test("onChange event for email", () => {
        const { getByTestId } = render(<ForgotPasswordForm />);
        const emailInput = getByTestId("emailInput");
        expect(emailInput).toHaveValue("");
        fireEvent.change(emailInput, {
            target: { value: "vishwas@gmail.com" }
        });
        expect(emailInput).toHaveValue("vishwas@gmail.com");
    });
    test("signin button is disabling for invalid email input", () => {
        const { getByTestId } = render(<ForgotPasswordForm />);
        const emailInput = getByTestId("emailInput");
        expect(getByTestId("submit")).toBeDisabled();
        // expect(getByText("errorText")).toHaveTextContent("");
        fireEvent.change(emailInput, { target: { value: "vishwas" } });
        expect(getByTestId("submit")).toBeDisabled();
        expect(getByTestId("errorText")).toHaveTextContent(
            "Please enter valid email"
        );
        fireEvent.change(emailInput, {
            target: { value: "vishwas@gmail.com" }
        });
        expect(getByTestId("submit")).toBeEnabled();
        expect(getByTestId("errorText")).toHaveTextContent("");
    });

    test("login link should be in the form", () => {
        const { getByTestId } = render(<ForgotPasswordForm />);
        expect(getByTestId("loginLink")).toBeInTheDocument();
        expect(getByTestId("loginLink")).toHaveTextContent("Go to Login");
    });

    //Test for Integration part
    // test("handlesubmit event should work ", async () => {
    //     const { getByTestId } = render(<ForgotPasswordForm />);
    //     fireEvent.click(getByTestId("submit"));
    //     fetchMock.mock("http://localhost:8001/user/login", 200);
    //     const res = await fetch("http://localhost:8001/user/login");
    //     expect(res.ok).toBeTruthy;
    // });
});
