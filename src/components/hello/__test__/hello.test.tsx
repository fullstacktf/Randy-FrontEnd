import * as React from "react";
import { shallow, mount, render } from "enzyme";
import { Hello } from "../hello";

const props = {
  name: "Carlos",
  srcAvatar: "../../../assets/avatar-man-1.jpg"
};

describe("Hello", () => {
  describe("Render", () => {
    xtest("Should render a h3 text with the name Carlos", () => {
      const wrapper = shallow(<Hello {...props}></Hello>);
      console.log('================================>', wrapper);
      expect(wrapper).toBe("Hola Carlos");
    });
  });
});
