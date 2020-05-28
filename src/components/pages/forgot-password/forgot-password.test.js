import React from "react";
import { create } from "react-test-renderer";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ForgotPassword from "./forgot-password";

describe("Forgot password page", () => {
    test("Matches the snapshot", () => {
        const login = create(<ForgotPassword />);
        expect(login.toJSON()).toMatchSnapshot();
    });
    test("should have background image", () => {
        const { getByTestId } = render(<ForgotPassword />);
        expect(getByTestId("backgroundImage")).toBeInTheDocument();
    });
    test("should have heading as Forgot password", () => {
        const { getByTestId } = render(<ForgotPassword />);
        expect(getByTestId("heading")).toHaveTextContent("Forgot password?");
    });
});
