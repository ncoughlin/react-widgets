import React, { useState, useEffect } from "react";
import axios from "axios";

// de-structure language and text props
const Convert = ({ language, text }) => {
  const [results, setResults] = useState([]);
  const [debouncedText, setDebouncedText] = useState(text);

  // de-bouncing the search term
  // runs every time the text changes  
  useEffect(() => {
      const timerId = setTimeout(() => {
          setDebouncedText(text);
      }, 500);

      return () => {
          clearTimeout(timerId);
      };
  }, [text]);

  // runs every time language or text updates
  useEffect(() => {
    const translate = async () => {
      const translation = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );

      setResults(translation.data.data.translations[0].translatedText);

      
    };

    translate();

  }, [language, debouncedText]);

  return (
    <div>
      <p>{results}</p>
    </div>
  );
};

export default Convert;
