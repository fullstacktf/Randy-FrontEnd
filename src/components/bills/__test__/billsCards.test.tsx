import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { BillsCards } from "../BillsCards";

describe("BillsCards", () => {
  describe("Render", () => {
    test("Should render a card", async () => {
      const { queryAllByText } = render(<BillsCards />);
      const items = await queryAllByText(/Parte a pagar/i);
      expect(items).toHaveLength(3);
    });
  });
});
