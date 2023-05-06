import React from "react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

import Author from "@/author"
import Book from "@/book"
import Home from "@/home"

import { Layout, Theme } from "./component"

const App = () => (
  <BrowserRouter>
    <Theme>
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/author/*" element={<Author />} />
          <Route path="/book/*" element={<Book />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Theme>
  </BrowserRouter>
)

export default App
