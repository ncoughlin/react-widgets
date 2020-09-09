import React from "react";

import Link from "./Link";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link href="/" className="item">
        Accordion
      </Link>
      <Link href="/color-select" className="item">
        Color Select
      </Link>
      <Link href="/translate" className="item">
        Translate
      </Link>
      <Link href="/search" className="item">
        Wiki Search
      </Link>
      <Link href="/all" className="item">
        All Widgets
      </Link>
    </div>
  );
};

export default Header;
