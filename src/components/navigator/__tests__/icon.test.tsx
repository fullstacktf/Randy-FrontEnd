import * as React from 'react';
import { shallow, mount, render } from 'enzyme';
import Icon from '../icon';
import dashboard from "../../../assets/icon-dashboard.svg"


describe("Icons", () => {
  describe("Render", () => {
    test("Should render a svg icon", () => {
      const wrapper = shallow(<Icon name={dashboard}></Icon>);
      expect(wrapper.exists("svg")).toBeTruthy();
    })
  })
  describe("Animations", () => {
    test("If the icon is clicked, then it changes the color to green", () => {
      const wrapper = shallow(<Icon name={dashboard}></Icon>);
      wrapper.find('svg').simulate('click');
      expect(wrapper.state('isSelected')).toEqual("#47AB43");
    })
  })
})
