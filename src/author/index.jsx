import React from "react"
import { Route, Routes } from "react-router-dom"

import Listing from "./page/Listing"
import View from "./page/View"

const Author = () => (
  <Routes path="author">
    <Route index element={<Listing />} />
    <Route path=":id" element={<View />} />
  </Routes>
)

export default Author
