import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Route1 from "./components/Route1";
import Route2 from "./components/Route2";
import Route3 from "./components/Route3";

import DefaultNested from "./components/Nested/DefaultNested";
import NestedA from "./components/Nested/NestedA";
import NestedB from "./components/Nested/NestedB";

export default (
  <Switch>
    <Route exact path="/" component={Route1} />
    <Route path="/route2" component={Route2} />
    {/* <Route path="/route3" component={Route3} /> */}

    <Route
      path="/route3"
      render={() => (
        <div>
          <Route3 />
          <div>
            <Link to="/route3/nestedA">NestedRouteA</Link>
            <Link to="/route3/nestedB">NestedRouteB</Link>
          </div>
          <Switch>
            <Route path="/route3" exact component={DefaultNested} />
            <Route path="/route3/nestedA" exact component={NestedA} />
            <Route path="/route3/nestedB" exact component={NestedB} />
          </Switch>
        </div>
      )}
    />

    <Route
      path="*"
      render={() => {
        return (
          <img src="https://media.giphy.com/media/NTXqH1bUCfHBS/source.gif" />
        );
      }}
    />
  </Switch>
);
