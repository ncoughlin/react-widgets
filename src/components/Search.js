import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("React");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      setResults(data.query.search);
    };

    // run search immediately if this is initial page load
    if (term && !results.length) {
      search();
    // else throttle search requests with timer  
    } else {
      // wait 500ms before executing search
      let timeoutID = setTimeout(() => {
        // do not search if input is empty
        if (term) {
          search();
        }
      }, 500);

      // CLEANUP: clear current timer
      return () => {
        clearTimeout(timeoutID);
      };
    }
  }, [term]);

  const searchResultsMapped = results.map((result) => {
    return (
      <div className="item" key={result.pageid}>
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            target="_blank"
          >
            Read Article
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Search Term</label>
          <input
            className="input"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="ui celled list">{searchResultsMapped}</div>
    </div>
  );
};

export default Search;
