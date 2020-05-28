import React from "react";
import { create } from "react-test-renderer";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ResetPassword from "./reset-password";

describe("Reset password page", () => {
    test("Matches the snapshot", () => {
        const login = create(<Resetpassword />);
        expect(login.toJSON()).toMatchSnapshot();
    });
    test("should have background image", () => {
        const { getByTestId } = render(<ResetPassword />);
        expect(getByTestId("backgroundImage")).toBeInTheDocument();
    });
    test("should have heading as Forgot password", () => {
        const { getByTestId } = render(<ResetPassword />);
        expect(getByTestId("heading")).toHaveTextContent("Reset password");
    });
});
