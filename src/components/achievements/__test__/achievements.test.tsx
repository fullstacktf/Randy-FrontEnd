import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { Achievements } from "../achievements";

describe("Achievements", () => {
  describe("Render", () => {
    test("Should render a achievement", async () => {
      const { queryByTitle } = render(<Achievements />);
      const items = await queryByTitle(/Tirar la basura/i);
      expect(items).toHaveProperty("title");
    });
  });
});
