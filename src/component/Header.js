// ヘッダー

import React from "react";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><HashLink smooth to="/#worklist">WORKS</HashLink></li>
          <li><HashLink smooth to="/#profile">PROFILE</HashLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header