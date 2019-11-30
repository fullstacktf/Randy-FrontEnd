import * as React from "react";
import { shallow, mount, render } from "enzyme";
import { Hello } from "../hello";

const props = {
  name: "Carlos",
  srcAvatar: "../../../assets/avatar-man-1.jpg"
};

describe("Hello", () => {
  describe("Render", () => {
    test("Should render a h1 text with the name Carlos", () => {
      const wrapper = shallow(<Hello {...props}></Hello>);
      expect(wrapper.find("h3").text()).toBe("Hola Carlos");
    });
  });
});
