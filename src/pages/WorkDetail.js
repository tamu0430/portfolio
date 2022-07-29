// WORKの詳細画面

import React from "react";
import { useParams } from "react-router-dom";
import Header from "../component/Header";
import Works from "../data/works.json"

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Variables from "../styles/Variables";

const WorkDetail = () => {
  const params = useParams()
  const work = Works[params.id]

  return (
    <>
      <Header />
      <main css={mainStyle}>
        <h2 css={titleStyle}>{work.title}</h2>
        <p css={subStyle}>{work.sub}</p>
      </main>
    </>
  )
}

const mainStyle = css`
  display: grid;
  place-content: center;
  margin: 0 auto;
  width: min(100%, ${Variables.width.main});
`

const titleStyle = css`
  text-align: center;
`

const subStyle = css`
  white-space: pre-wrap;
  word-wrap: break-word;
`

export default WorkDetail