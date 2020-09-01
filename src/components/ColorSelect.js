import React, { useState } from "react";

import Dropdown from "./Dropdown";

const colorOptions = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "The Color Blue",
    value: "blue",
  },
];

const ColorSelect = () => {
  const [selected, setSelected] = useState(colorOptions[0]);

  return (
    <div>
      <Dropdown
        options={colorOptions}
        selected={selected}
        onSelectedChange={setSelected}
      />
    </div>
  );
};

export default ColorSelect;
