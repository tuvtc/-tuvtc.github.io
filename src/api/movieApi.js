import axios from "axios"

// Tao instance cho axios de tai su dung va chi khai bao 1 lan url va token
const movieAxios = axios.create({
    baseURL: process.env.REACT_APP_MOVIE_DATABASE_URL,
    headers: { 'Authorization': `Bearer ${process.env.REACT_APP_MOVIE_DATABASE_ACCESS_TOKEN}` }
})

// Tao object chua cac function call Api
export const movieApi = {
    getMovie: () => movieAxios.get(`/movie/666`),
    fetchTrending: () => movieAxios.get(`/trending/all/week?language=en-US`),
	fetchNetflixOriginals: () => movieAxios.get(`/discover/tv?with_network=123`),
	fetchTopRated: () => movieAxios.get(`/movie/top_rated?language=en-US`),
	fetchActionMovies: () => movieAxios.get(`/discover/movie?with_genres=28`),
	fetchComedyMovies: () => movieAxios.get(`/discover/movie?with_genres=35`),
	fetchHorrorMovies: () => movieAxios.get(`/discover/movie?with_genres=27`),
	fetchRomanceMovies: () => movieAxios.get(`/discover/movie?with_genres=10749`),
	fetchDocumentaries: () => movieAxios.get(`/discover/movie?with_genres=99`),
	fetchSearch: () => movieAxios.get(`/search/movie?language=en-US`),
	getTrailersByMovieId: (id) => movieAxios.get(`/movie/${id}/videos`),
	searchMovieByName: (name) => movieAxios.get(`/search/movie?language=en&query=${name}`)
}

