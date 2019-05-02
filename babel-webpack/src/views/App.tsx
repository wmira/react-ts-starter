import * as React from "react";

export interface IAppProp {
    greeting: string;
}

export const App: React.FC<IAppProp> = (prop) => {
  return (
    <h2>{prop.greeting}</h2>
  )
}
