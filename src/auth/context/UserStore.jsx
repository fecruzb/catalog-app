import React, { useEffect } from "react"
import PropTypes from "prop-types"

import * as actions from "@auth/action"

const Context = React.createContext()

const UserStore = ({ children, initialState }) => {
  const [user, setUser] = React.useState(initialState)

  useEffect(() => {
    const initialize = async () => {
      const authData = await actions.login(user.token)
      setUser(authData)
    }

    if (!user) initialize()
  }, [user])

  const value = { user, setUser }

  return <Context.Provider value={value}>{children}</Context.Provider>
}

UserStore.defaultProps = {
  initialState: {},
}

UserStore.propTypes = {
  children: PropTypes.element.isRequired,
  initialState: PropTypes.shape({
    token: "",
  }),
}

const useAuth = () => React.useContext(Context)

export { Context, useAuth }
export default UserStore
