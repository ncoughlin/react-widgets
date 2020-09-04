import React, { useState, useEffect } from "react";

// de-structure language and text props
const Convert = ({ language, text }) => {
  useEffect(() => {
    console.log("language or text has changed");
  }, [language, text]);

  return <div>
      <p>{text}</p>
  </div>;
};

export default Convert;
