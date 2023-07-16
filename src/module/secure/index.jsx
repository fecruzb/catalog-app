import React from "react"

import { useAuth } from "../auth/context/UserStore"
import ExternalRouter from "../external"
import InternalRouter from "../internal"

const SecureRouter = () => {
  const { user } = useAuth()
  return user?.id ? <InternalRouter /> : <ExternalRouter />
}

export default SecureRouter
