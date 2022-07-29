// WORKの詳細画面

import React from "react";
import { useParams } from "react-router-dom";
import Header from "../component/Header";
import Works from "../data/works.json"

const WorkDetail = () => {
  const params = useParams()
  const work = Works[params.id]

  return (
    <>
      <Header />
      <main>
        <h2>{work.title}</h2>
        <p>{work.sub}</p>
      </main>
    </>
  )
}

export default WorkDetail