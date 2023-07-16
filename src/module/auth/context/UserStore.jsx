import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"

import Cookies from "js-cookie"

import * as api from "../api"

/**
 * Context object for user authentication and data.
 * @type {React.Context}
 */
const Context = React.createContext()

const UserStore = ({ children }) => {
  /**
   * State hook for storing the authentication token.
   * @type {string|null}
   */
  const [token, setToken] = useState(Cookies.get("token"))

  /**
   * State hook for storing the user data.
   * @type {object|null}
   */
  const [user, setUser] = useState(null)

  /**
   * State hook for tracking loading state.
   * @type {boolean}
   */
  const [loading, setLoading] = useState(true)

  /**
   * Function to handle user login.
   * @param {string} newToken - The new authentication token.
   */
  const login = (newToken) => {
    Cookies.set("token", newToken)
    setToken(newToken)
  }

  /**
   * Function to handle user logout.
   */
  const logout = () => {
    Cookies.remove("token")
    setToken(null)
  }

  useEffect(() => {
    /**
     * Asynchronous function to fetch user data.
     * @param {string} authToken - The authentication token.
     */
    const fetchUser = async (authToken) => {
      try {
        const response = await api.readUser(authToken)
        setUser(response.data)
      } catch {
        logout()
      }
      setLoading(false)
    }

    if (token && !user) {
      // Fetch user data if token exists and user data is not available
      fetchUser(token)
    } else if (user && !token) {
      // Clear user data if token is null
      setUser(null)
    } else {
      // No token on cookies, loading false
      setLoading(false)
    }
  }, [token, user])

  const value = {
    user,
    token,
    login,
    logout,
  }

  if (loading) return <>Loading</>

  return <Context.Provider value={value}>{children}</Context.Provider>
}

UserStore.propTypes = {
  children: PropTypes.element.isRequired,
}

/**
 * Hook to access the authentication context.
 * @returns {object} The authentication context.
 */
const useAuth = () => React.useContext(Context)

export { Context, useAuth }
export default UserStore
