import React, { useState } from "react";

import Dropdown from "./Dropdown";

const translationOptions = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
];

const Translate = () => {
  return (
    <div>
      <Dropdown translationOptions={translationOptions} />
    </div>
  );
};

export default Translate;
