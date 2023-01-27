import React from "react"
import { Route, Routes } from "react-router-dom"

import Listing from "./page/Listing"
import View from "./page/View"

const Book = () => (
  <Routes path="book">
    <Route index element={<Listing />} />
    <Route path=":id" element={<View />} />
  </Routes>
)

export default Book
