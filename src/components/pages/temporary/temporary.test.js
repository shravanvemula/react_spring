import React from "react";
import { render, fireEvent, getByTestId } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TemporaryPage from "./temporary";

describe("Temporary Page", () => {
    test("heading should be in the document", () => {
        const { getByText } = render(<TemporaryPage />);
        expect(getByText("Screen is yet to be designed")).toBeInTheDocument();
    });
});
