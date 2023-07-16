import React from "react"
import { Navigate, Route, Routes } from "react-router-dom"

import Auth from "@/auth"

const ExternalRouter = () => (
  <Routes>
    <Route index element={<Auth />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
)
export default ExternalRouter
