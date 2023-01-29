import axios from "axios"

/* Base URL */
const baseURL = "http://localhost:4000"

/**
 * [GET] /books
 *
 * List all books from database.
 *
 * @returns {Promise.<string>} List of Book Object
 */
export const list = async () => axios.get("/books", { baseURL })

/**
 * [GET] /books/:id
 *
 * Select a single author from database.
 *
 * @returns {Promise.<string>} Book Object
 */
export const read = async (id) => axios.get(`/books/${id}`, { baseURL })
