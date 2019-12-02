import * as React from "react";
import { shallow } from "enzyme";
import { Icon } from "../icon";

class IconTest {
  private wrapper;

  constructor(component) {
    this.wrapper = shallow(component);
  }

  click() {
    this.wrapper.find('svg').parent().simulate("click");
  }

  getIconColor() {
    return this.wrapper.find('rect').at(0).prop('fill');
  }
}

describe("Icons", () => {
  xdescribe("Render", () => {
    test("Should render a svg icon", () => {
      const wrapper = shallow(<Icon name="dashboard" active></Icon>);
      expect(wrapper.exists("svg")).toBeTruthy();
    });
  });
  xdescribe("Animations", () => {
    test("If the icon is clicked, then it changes the color to green", () => {
      const iconTest = new IconTest(<Icon name="dashboard" active />);
      expect(iconTest.getIconColor()).toBe('#FFFFFF');
      iconTest.click();
      expect(iconTest.getIconColor()).toBe('#47AB43');
    });
  });
});


