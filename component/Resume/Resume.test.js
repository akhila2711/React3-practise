import React from "react";
import { shallow } from "enzyme";
import Resume from "./Resume";

describe("Resume", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Resume />);
    expect(wrapper).toMatchSnapshot();
  });
});
