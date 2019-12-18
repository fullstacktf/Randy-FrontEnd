import * as React from "react";
import { fireEvent, render } from "@testing-library/react";
import { Hello } from "../hello";

const props = {
  name: "Carlos",
  srcAvatar: "../../../assets/avatar-man-1.jpg"
};

xdescribe("Hello", () => {
  describe("Render", () => {
    test("Should render a h3 text with the name Carlos", async () => {
      const { queryByText } = render(<Hello {...props} />);
      const items = await queryByText(/Carlos/i);
      expect(items).toBe("Carlos");
    });
  });
});
