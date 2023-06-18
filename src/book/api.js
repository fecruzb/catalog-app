import axios from "axios"

/* Base URL */
const baseURL = API_URL

/**
 * [GET] /books
 *
 * List all books from the database.
 *
 * @returns {Promise.<string>} List of Book Objects
 */
export const list = async () => axios.get("/books", { baseURL })

/**
 * [GET] /books/:id
 *
 * Select a single book from the database.
 *
 * @param {string} id - The ID of the book to be retrieved.
 * @returns {Promise.<string>} Book Object
 */
export const read = async (id) => axios.get(`/books/${id}`, { baseURL })

/**
 * [POST] /books
 *
 * Create a new book.
 *
 * @param {Object} book - The data of the book to be created.
 * @returns {Promise.<string>} Created Book Object
 */
export const create = async (book) => axios.post("/books", book, { baseURL })

/**
 * [PUT] /books/:id
 *
 * Update an existing book.
 *
 * @param {Object} book - The updated data of the book.
 * @returns {Promise.<string>} Updated Book Object
 */
export const update = async (book) => axios.put(`/books/${book.id}`, book, { baseURL })

/**
 * [DELETE] /books/:id
 *
 * Delete a book from the database.
 *
 * @param {string} id - The ID of the book to be deleted.
 * @returns {Promise.<string>} Success message
 */
export const remove = async (id) => axios.delete(`/books/${id}`, { baseURL })
