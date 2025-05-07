import React from "react";
import { shallow } from "enzyme";
import Loginfunctional from "./loginfunctional";

describe("Loginfunctional", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Loginfunctional />);
    expect(wrapper).toMatchSnapshot();
  });
});
