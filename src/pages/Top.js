// トップ画面

import React from "react";
import Header from "../component/Header";
import WorksList from "../component/WorksList";

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Variables from "../styles/Variables";

const Top = () => {
  return (
    <>
      <Header />
      <main css={mainStyle}>
        <div id="top" css={topStyle}>
          <span>PORTFOLIO</span>
          <span></span>
        </div>
        <section id="works" css={sectionStyle}>
          <h2 css={titleStyle}>WORKS</h2>
          <WorksList />
        </section>
        <section id="profile" css={sectionStyle}>
          <h2 css={titleStyle}>PROFILE</h2>
          <div>
            <p>
              北村　佳瑚（キタムラ　カコ）。4/30生まれ。三重県出身。<br />
              新卒で入社した会計ソフトベンダーに約８年間勤務。<br />
              主に画面レイアウト設計、フロントエンド実装に従事。<br />
              フットボールアワーとディズニーと酒が好き。最近Keyにハマっている。
            </p>
            <h3 css={subTitleStyle}>経歴</h3>
            <p>
              新規プロジェクトの立上げ<br />
            </p>
            <h3 css={subTitleStyle}>スキルセット</h3>
            <p>
              実務経験あり<br />
              HTML、CSS、SCSS<br />
              Javascript、jQuery、KendoUI<br />
              Ruby on Rails、ASP.NET MVC<br /><br />
              勉強中<br />
              React、node.js
            </p>
          </div>
        </section>
      </main>
    </>
  )
}

const mainStyle = css`
  display: flex;
  align-items: center;
  flex-direction: column;
`

const topStyle = css`
  height: min(100vh, 1000px);
  width: 100%;
`

const titleStyle = css`
  margin-bottom: 1rem;
  color: ${Variables.colors.subFontColor} ;
  text-align: center;
`

const sectionStyle = css`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
  width: min(100%, ${Variables.width.main});
`

const subTitleStyle = css`
  margin-top: 1.5rem;
  color: ${Variables.colors.subFontColor} ;
  font-size: 1rem;
`

export default Top