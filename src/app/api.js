import axios from "axios"

/* Base URL */
const baseURL = API_URL
export const prompt = async (input) => axios.get(`/gpt/prompt?prompt=${input}`, { baseURL })
export const read = async (input) => axios.get(`/gpt/image?prompt=${input}`, { baseURL })
