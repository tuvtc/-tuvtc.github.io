// import du lieu va css
import React from "react"
import './MovieList.css'
import MovieDetail from "./MovieDetail"
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';

// Function component MovieCard
export function MovieCard(props) {
    // detructering props
    const { vertical, movie, onSelectedMovie } = props
    const { poster_path, backdrop_path, name } = movie
    // props co vertical thi lay theo poster khong thi lay backdrop
    const img = vertical ? poster_path : backdrop_path
    return (
        <div className={`movie-card ${!vertical ? 'back-drop' : ''}`} onClick={onSelectedMovie}>
            <img src={`${process.env.REACT_APP_MOVIE_DATABASE_IMG_URL}${img}`} alt={name} />
        </div>
    )
}

// Funtion component Movie List
function MovieList(props) {
    const [isShowDetail, setIsShowDetail] = React.useState(false)
    // detructering props
    const {title, vertical = false, movies = [], onSelectedMovie, selectedMovie} = props

    // Neu selectedMovie co truyen vao thi set State
    React.useEffect(() => {
        if (selectedMovie) {
            setIsShowDetail(selectedMovie)
        }
    }, [selectedMovie, movies, setIsShowDetail])

    return (
        <div>
            {title && <h3 className="text-white ps-2 pt-2">{title}</h3>}
            <PerfectScrollbar className="d-flex gap-2 movie-list">
                {
                    movies.map((movie, index) => {
                        return <MovieCard key={index} movie={movie} vertical={vertical} onSelectedMovie={() => onSelectedMovie(movie)} />
                    })
                }
            </PerfectScrollbar>
            {selectedMovie && isShowDetail && <MovieDetail movie={selectedMovie} />}
        </div>
    )
}

export default MovieList
