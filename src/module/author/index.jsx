import React from "react"
import { Route, Routes } from "react-router-dom"

import { Create, Edit, Listing, View } from "./page"

const Author = () => (
  <Routes path="author">
    <Route index element={<Listing />} />
    <Route path="new" element={<Create />} />
    <Route path=":id/edit" element={<Edit />} />
    <Route path=":id" element={<View />} />
  </Routes>
)

export default Author
