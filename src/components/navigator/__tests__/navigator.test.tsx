import * as React from 'react';
import { shallow, mount, render } from 'enzyme';
import Navigator from '../navigator'

describe("Navigator", () => {
  describe("Render", () => {
    test("Shoud be true if generate a container div with the navigator", () => {
      const wrapper = shallow(<Navigator />);
      expect(wrapper.exists("div")).toBeTruthy();
    });
    test("Should contain 5 icons", () => {
      const wrapper = shallow(<Navigator />);
      expect(wrapper.find("Icon").length).toBe(5);
    });
  });
})



