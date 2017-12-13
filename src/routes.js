import * as React from "react";
import { Switch, Route } from "react-router-dom";
import Loadable from "react-loadable";

import Loading from "components/Loading";

const HomeAsync = Loadable({
  loader: () => import("pages/Home"),
  loading: Loading
});
const Page2Async = Loadable({
  loader: () => import("pages/Page2"),
  loading: Loading
});
const Page3Async = Loadable({
  loader: () => import("pages/Page3"),
  loading: Loading
});

const Routes = () => (
  <Switch>
    <Route path="/" exact component={HomeAsync} />
    <Route path="/page2" exact component={Page2Async} />
    <Route path="/page3" exact component={Page3Async} />
  </Switch>
);

export default Routes;
