import React, { useState } from "react";

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

const Accordion = () => {
  const [activeTab, setActiveTab] = useState(null);

  const onTitleClick = (index) => {
    setActiveTab(index);
  };

  const renderedItems = items.map((item, index) => {
    //  if current index is same as active tab, add class "active"
    const activeStatus = index === activeTab ? 'active' : '';

    return (
      <React.Fragment key={item.title}>
        <div className={`title ${activeStatus}`} onClick={() => onTitleClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${activeStatus}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return (
    <div className="ui styled accordion">
      {renderedItems}
    </div>
  );
};

export default Accordion;
