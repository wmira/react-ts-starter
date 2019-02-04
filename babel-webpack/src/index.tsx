
import * as React from "react";
import { render } from "react-dom";

import { App } from "./views/App";

const container = document.getElementById("root");

render(<App greeting="Hello World" />, container);
