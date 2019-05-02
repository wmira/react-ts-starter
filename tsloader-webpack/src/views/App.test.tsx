
import * as React from "react";
import { render } from "react-testing-library";
import { App } from "./App";

describe("<App/>", () => {
  it("renders greeting specified in prop", () => {
    const { getByText } = render(<App greeting="test"/>)
    getByText("test")
  })
});
