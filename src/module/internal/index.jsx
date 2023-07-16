import React from "react"
import { Navigate, Route, Routes } from "react-router-dom"

import Author from "@/author"
import Book from "@/book"
import Home from "@/home"

import { Layout } from "./component"

const InternalRouter = () => (
  <Layout>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/author/*" element={<Author />} />
      <Route path="/book/*" element={<Book />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </Layout>
)

export default InternalRouter
