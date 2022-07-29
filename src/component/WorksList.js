// WORKのリスト

import React from "react";
import { Link } from "react-router-dom";
import Works from "../works.json"

const WorksList = () => {
  const CreateList = () => {
    let list = []
    Object.keys(Works).forEach((key, i) => {
      list.push(
        <li key={i}>
          <Link to={`/work_detail/${key}`}>{Works[key].title}</Link>
        </li>
      )
    })
    return list
  }

  return (
    <ul>
      {CreateList()}
    </ul>
  )
}

export default WorksList