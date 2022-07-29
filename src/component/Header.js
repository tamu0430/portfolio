// ヘッダー

import React from "react";
import { HashLink } from "react-router-hash-link";

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Variables from "../styles/Variables";

const Header = () => {
  return (
    <header css={headerStyle}>
      <h1 css={titleStyle}>
        <HashLink smooth to="/#top" css={titleLinkStyle}>PORTFOLIO</HashLink>
      </h1>
      <nav css={navStyle}>
        <ul css={ulStyle}>
          <li css={liStyle}>
            <HashLink smooth to="/#works" css={linkStyle}>WORKS</HashLink>
          </li>
          <li css={liStyle}>
            <HashLink smooth to="/#profile" css={linkStyle}>PROFILE</HashLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

const headerStyle = css`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  background-color: rgba(255, 255, 255, .5);
  backdrop-filter: blur(5px);
`

const titleStyle = css`

`

const titleLinkStyle = css`
  padding: 1rem 1.5rem;
  color: ${Variables.colors.subFontColor} ;
  font-size: 1rem;
  text-decoration: none;
`

const navStyle = css`
  display: flex;
`

const ulStyle = css`
  display: flex;
`

const liStyle = css`
  display: flex;
`

const linkStyle = css`
  padding: 1rem 1.5rem;
  color: ${Variables.colors.subFontColor} ;
  text-decoration: none;
`

export default Header