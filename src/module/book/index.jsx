import React from "react"
import { Route, Routes } from "react-router-dom"

import { Create, Edit, Listing, View } from "./page"

const Book = () => (
  <Routes path="book">
    <Route index element={<Listing />} />
    <Route path="new" element={<Create />} />
    <Route path=":id/edit" element={<Edit />} />
    <Route path=":id" element={<View />} />
  </Routes>
)

export default Book
