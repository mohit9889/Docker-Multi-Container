import axios from 'axios'

// const baseURL = 'http://localhost:5000'

const api = axios.create()

export const insertMovie = payload => api.post(`/api/movie`, payload)
export const getAllMovies = () => api.get("/api/movies")
export const updateMovieById = (id, payload) => api.put(`/api/movie/${id}`, payload)
export const deleteMovieById = id => api.delete(`/api/movie/${id}`)
export const getMovieById = id => api.get(`/api/movie/${id}`)

const apis = {
    insertMovie,
    getAllMovies,
    updateMovieById,
    deleteMovieById,
    getMovieById,
}

export default apis