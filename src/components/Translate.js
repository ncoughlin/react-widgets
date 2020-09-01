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
  const [language, setLanguage] = useState(translationOptions[0]);

  return (
    <div>
      <Dropdown
        options={translationOptions}
        selected={language}
        onSelectedChange={setLanguage}
      />
    </div>
  );
};

export default Translate;
