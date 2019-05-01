import * as React from 'react';
import { greet } from 'module1/util';
export const App = () => {
    return (React.createElement("div", null,
        "Project Reference Sample ",
        `${greet()} `,
        " "));
};
