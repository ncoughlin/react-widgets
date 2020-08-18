import React from "react";

import Accordion from "./components/Accordion";
import Search from './components/Search';

const items = [
  {
    title: "Excepteur sint occaecat",
    content:
      "Morbi tristique senectus et netus et malesuada. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Morbi tincidunt ornare massa eget egestas purus viverra. Ut tristique et egestas quis ipsum. Nunc faucibus a pellentesque sit amet porttitor eget. Praesent elementum facilisis leo vel fringilla est ullamcorper eget nulla. ",
  },
  {
    title: "Duis aute irure dolor",
    content:
      "Augue interdum velit euismod in pellentesque massa placerat. Id aliquet lectus proin nibh nisl condimentum id venenatis. Non enim praesent elementum facilisis leo vel fringilla. Semper eget duis at tellus at urna condimentum mattis pellentesque. ",
  },
  {
    title: "Ut enim ad minim",
    content:
      "Lacus luctus accumsan tortor posuere ac ut consequat semper. Suscipit adipiscing bibendum est ultricies integer quis auctor. Nunc sed velit dignissim sodales ut. Vestibulum morbi blandit cursus risus at ultrices mi. Netus et malesuada fames ac turpis egestas integer.",
  },
];

export default () => {
  return (
    <div>
      <Search />  
    </div>
  );
};
