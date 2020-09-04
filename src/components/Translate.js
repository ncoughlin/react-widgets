import React, { useState } from "react";

import Dropdown from "./Dropdown";

const languages = [
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
  const [language, setLanguage] = useState(languages[0]);
  const [text, setText] = useState("");

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label> Enter Text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>

      <Dropdown
        label="Select a Language"
        options={languages}
        selected={language}
        onSelectedChange={setLanguage}
      />
    </div>
  );
};

export default Translate;
