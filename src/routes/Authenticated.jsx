import React from "react";
import { Router } from "@reach/router";
import Scenes from "containers/Scenes";
import NotFound from "components/common/NotFound";

export default () => {
  return (
    <Router>
      <Scenes path="/" component={Scenes} />
      <NotFound default component={NotFound} />
    </Router>
  );
};
