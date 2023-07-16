import axios from "axios"

/* Base URL */
const baseURL = API_URL

/**
 * [POST] /login
 *
 * User login with email and password.
 *
 * @param {string} email - User's email.
 * @param {string} password - User's password.
 * @returns {Promise.<string>} Token Object
 */
export const login = async (email, password) =>
  axios.post("/user", { email, password }, { baseURL })

/**
 * [GET] /user
 *
 * Retrieve user based on the token.
 *
 * @param {string} token - User's token.
 * @returns {Promise.<string>} User Object
 */
export const readUser = async (token) =>
  axios.get("/user", {
    headers: { Authorization: token },
    baseURL,
  })
