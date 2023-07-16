import React from "react"
import { Route, Routes } from "react-router-dom"

import { Login } from "./page"

const Auth = () => (
  <Routes path="auth">
    <Route index element={<Login />} />
  </Routes>
)

export default Auth
