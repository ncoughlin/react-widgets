import React from "react";

const Dropdown = ({ dropdownOptions, selected, onSelectedChange }) => {
  const renderedOptions = dropdownOptions.map((option) => {
    // if current selection is equal to option do not generate div
    if (option.value === selected.value){
      return null;
    }

    return (
      <div 
        key={option.value} 
        className="item"
        // on click change selection to current option
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div className="ui form">
      <div className="field">
        <label className="label">Select a Color</label>
        <div className="ui selection dropdown visible active">
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className="menu visible transition">{renderedOptions}</div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
