import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { HeaderTop } from "../header";

xdescribe("HeaderTop", () => {
  describe("Render", () => {
    test("Should render a header with name Carlos", async () => {
      const { queryByText } = render(<HeaderTop />);
      const items = await queryByText(/Carlos/i);
      expect(items).toBeFalsy();
    });
  });
});
