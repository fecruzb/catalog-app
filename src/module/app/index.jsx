import React from "react"
import { BrowserRouter } from "react-router-dom"

import UserStore from "@/auth/context/UserStore"

import SecureRouter from "../secure"
import { Theme } from "./component"

const App = () => {
  return (
    <BrowserRouter>
      <Theme>
        <UserStore>
          <SecureRouter />
        </UserStore>
      </Theme>
    </BrowserRouter>
  )
}

export default App
