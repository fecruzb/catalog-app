import axios from "axios"

/* Base URL */
const baseURL = "http://localhost:4000"

/**
 * [GET] /authors
 *
 * List all authors from database.
 *
 * @returns {Promise.<string>} List of Author Object
 */
export const list = async () => axios.get("/authors", { baseURL })

/**
 * [GET] /authors/:id
 *
 * Select a single author from database.
 *
 * @returns {Promise.<string>} Author Object
 */
export const read = async (id) => axios.get(`/authors/${id}`, { baseURL })
