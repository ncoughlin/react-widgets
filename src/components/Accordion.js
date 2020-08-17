import React, { useState } from "react";

const Accordion = ({ items }) => {
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
