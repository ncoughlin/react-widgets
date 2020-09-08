import React from "react";

import ColorSelect from './components/ColorSelect';
import Translate from './components/Translate'
import Accordion from "./components/Accordion";
import Search from "./components/Search";

const showAccordion = () => {
  if (window.location.pathname === '/') {
    return <Accordion />;
  }
}

const showColorSelect = () => {
  if (window.location.pathname === '/color-select') {
    return <ColorSelect />;
  }
}

const showTranslate = () => {
  if (window.location.pathname === '/translate') {
    return <Translate />;
  }
}

const showSearch = () => {
  if (window.location.pathname === '/search') {
    return <Search />;
  }
}

export default () => {

  return (
    <div className="ui container">
      {showAccordion()}
      {showColorSelect()}
      {showTranslate()}
      {showSearch()}
    </div>
  );
};
