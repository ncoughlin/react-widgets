import React from "react";

import Header from "./components/Header";
import Route from "./components/Route";
import ColorSelect from "./components/ColorSelect";
import Translate from "./components/Translate";
import Accordion from "./components/Accordion";
import Search from "./components/Search";

export default () => {
  return (
    <div className="ui container">
      <Header />
      <Route path="/">
        <Accordion />
      </Route>
      <Route path="/color-select">
        <ColorSelect />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/all">
        <Accordion />
        <ColorSelect />
        <Translate />
        <Search />
      </Route>
    </div>
  );
};
