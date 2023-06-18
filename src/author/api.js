import axios from "axios"

/* Base URL */
const baseURL = API_URL

/**
 * [GET] /authors
 *
 * List all authors from the database.
 *
 * @returns {Promise.<string>} List of Author Objects
 */
export const list = async () => axios.get("/authors", { baseURL })

/**
 * [GET] /authors/:id
 *
 * Select a single author from the database.
 *
 * @param {string} id - The ID of the author to be retrieved.
 * @returns {Promise.<string>} Author Object
 */
export const read = async (id) => axios.get(`/authors/${id}`, { baseURL })

/**
 * [POST] /authors
 *
 * Create a new author.
 *
 * @param {Object} author - The data of the author to be created.
 * @returns {Promise.<string>} Created Author Object
 */
export const create = async (author) => axios.post("/authors", author, { baseURL })

/**
 * [PUT] /authors/:id
 *
 * Update an existing author.
 *
 * @param {string} id - The ID of the author to be updated.
 * @param {Object} author - The updated data of the author.
 * @returns {Promise.<string>} Updated Author Object
 */
export const update = async (author) => axios.put(`/authors/${author.id}`, author, { baseURL })

/**
 * [DELETE] /authors/:id
 *
 * Delete an author from the database.
 *
 * @param {string} id - The ID of the author to be deleted.
 * @returns {Promise.<string>} Success message
 */
export const remove = async (id) => axios.delete(`/authors/${id}`, { baseURL })
