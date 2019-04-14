
import * as React from "react";
import TestRenderer from "react-test-renderer";
import { App } from "./App";

// you should probably use react-testing-library
describe("<App/>", () => {
    it("renders greeting specified in prop", () => {
        const underTest = TestRenderer.create(<App greeting="banana" />);
        expect(underTest.toTree()!.props.greeting).toEqual("banana");
        expect(underTest.toTree()!.rendered!.type).toEqual("h2");
        const rendered = underTest.toTree()!.rendered!.rendered;
        expect(rendered).toHaveLength(1);
    });
});
