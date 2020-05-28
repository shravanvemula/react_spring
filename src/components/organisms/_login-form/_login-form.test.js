import React from "react";
import { create } from "react-test-renderer";
import { render, fireEvent, getByTestId } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import LoginForm from "./_login-form";
import fetchMock from "fetch-mock";

describe("LoginForm component", () => {
    test("Matches the snapshot", () => {
        const loginForm = create(<LoginForm />);
        expect(loginForm.toJSON()).toMatchSnapshot();
    });

    test("onChange event for password", () => {
        const { getByTestId } = render(<LoginForm />);
        const passwordInput = getByTestId("passwordInput");
        expect(passwordInput).toHaveValue("");
        fireEvent.change(passwordInput, { target: { value: "12345678" } });
        expect(passwordInput).toHaveValue("12345678");
    });
    test("onChange event for email", () => {
        const { getByTestId } = render(<LoginForm />);
        const emailInput = getByTestId("emailInput");
        expect(emailInput).toHaveValue("");
        fireEvent.change(emailInput, {
            target: { value: "vishwas@gmail.com" }
        });
        expect(emailInput).toHaveValue("vishwas@gmail.com");
    });

    test("sign in button is disabled by default and should be enabled only when email input and password input is valid", () => {
        const { getByTestId, getByText } = render(<LoginForm />);
        expect(getByTestId("submit")).toBeDisabled();
        fireEvent.change(getByTestId("emailInput"), {
            target: { value: "vishwas" }
        });
        expect(getByText("Please enter valid email")).toBeInTheDocument();
        fireEvent.change(getByTestId("passwordInput"), {
            target: { value: "1234" }
        });
        expect(
            getByText("Your password must be atleast 8 characters long")
        ).toBeInTheDocument();
        expect(getByTestId("submit")).toBeDisabled();
        fireEvent.change(getByTestId("emailInput"), {
            target: { value: "vishwas@gmail.com" }
        });
        fireEvent.change(getByTestId("passwordInput"), {
            target: { value: "12345678" }
        });
        expect(getByTestId("submit")).toBeEnabled();
    });

    test("Forgot password should be in the form", () => {
        const { getByTestId } = render(<LoginForm />);
        expect(getByTestId("forgotPassword")).toBeInTheDocument();
        expect(getByTestId("forgotPassword")).toHaveTextContent(
            "Forgot password?"
        );
    });
    test("Signup link should be in the form", () => {
        const { getByTestId } = render(<LoginForm />);
        expect(getByTestId("signupLink")).toBeInTheDocument();
        expect(getByTestId("signupLink")).toHaveTextContent("Sign Up");
    });

    test("handlesubmit event should work ", async () => {
        const { getByTestId } = render(<LoginForm />);
        fireEvent.click(getByTestId("submit"));
        fetchMock.mock("http://localhost:8001/user/login", 200);
        const res = await fetch("http://localhost:8001/user/login");
        expect(res.ok).toBeTruthy;
    });
});