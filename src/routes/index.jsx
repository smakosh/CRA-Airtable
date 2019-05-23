import React from "react";
import { Router } from "@reach/router";
import Theme from "./global-style";
import Scenes from "containers/Scenes";

const NotFound = () => <div>404 - Page Not Found</div>;

export default () => (
  <>
    <Theme />
    <Router>
      <Scenes path="/" component={Scenes} />
      <NotFound default component={NotFound} />
    </Router>
  </>
);
