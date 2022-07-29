// トップ画面

import React from "react";
import Header from "../component/Header";
import WorksList from "../component/WorksList";

const Top = () => {
  return (
    <>
      <Header />
      <main>
        <h1>KAKO</h1>
        <section id="works">
          <h2>WORKS</h2>
          <WorksList />
        </section>
        <section id="profile">
          <h2>PROFILE</h2>
          <p>
            北村　佳瑚<br />
            1991/4/30<br />
            新卒で入社した会計ソフトベンダーに約８年間勤務。<br />
            新規プロジェクトの立上げ
          </p>
        </section>
      </main>
    </>
  )
}

export default Top