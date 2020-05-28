import React from "react";
import { create } from "react-test-renderer";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import RecoveredPassword from "./recovered-password";

describe("Recovered Password Page", () => {
    test("Matches the snapshot", () => {
        const login = create(<RecoveredPassword />);
        expect(login.toJSON()).toMatchSnapshot();
    });
    test("should have background image", () => {
        const { getByTestId } = render(<RecoveredPassword />);
        expect(getByTestId("backgroundImage")).toBeInTheDocument();
    });
    test("should have heading as Forgot password ", () => {
        const { getByTestId } = render(<RecoveredPassword />);
        expect(getByTestId("heading")).toHaveTextContent("Forgot password ?");
    });
    test("should have helper text", () => {
        const { getByTestId } = render(<RecoveredPassword />);
        expect(getByTestId("helperText")).toHaveTextContent(
            "You’ve been emailed a password reset link."
        );
    });

    test("Login link should be in the form", () => {
        const { getByTestId } = render(<RecoveredPassword />);
        expect(getByTestId("login-link")).toBeInTheDocument();
        expect(getByTestId("login-link")).toHaveTextContent("Go to Login");
    });
});
