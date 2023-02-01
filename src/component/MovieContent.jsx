// import du lieu 
import React from 'react'
import MovieList from './MovieList'
import { movieApi } from '../api/movieApi'

// bien constants ve cac loai movie list
const movieListType = {
    ORIGIN: 'ORIGIN',
    TRENDING: 'TRENDING',
    TOP_RATES: 'TOP_RATES',
    ACTION: 'ACTION',
    COMEDY: 'COMEDY',
    HORROR: 'HORROR',
    ROMANCE: 'ROMANCE',
    DOCUMENT: 'DOCUMENT'
}

// Function Component MovieContent
function MovieContent() {
    // state cua tung movie list trong movie content
    const [selectedMovie, setSelectedMovie] = React.useState(null)
    const [selectedMovieList, setSelectedMovieList] = React.useState(null)
    const [originMovies, setOriginMovies] = React.useState([])
    const [trendMovies, setTrendMovies] =  React.useState([])
    const [topRatedMovies, setTopRatedMovies] =  React.useState([])
    const [actionMovies, setActionMovies] =  React.useState([])
    const [comedyMovies, setComedyMovies ] =  React.useState([])
    const [horrorMovies, setHorrorMovies] =  React.useState([])
    const [romanceMovies, setRomanceMovies] =  React.useState([])
    const [docMovies, setDocMovies] =  React.useState([])

    // Ham dung chung Get api movie de tai su dung
    const fetchMovies = async (fetchApi, setDataMovies) => {
        try {
            const response = await fetchApi()
            const movieList = response.data.results
            setDataMovies(movieList)
        } catch (e) {
            alert(JSON.stringify(e.message))
        }
    }

    // Xu ly the Movie da duoc bam vao, nhan tham so la movie va loai type
    const onSelectedMovie = (movie, type) => {
        // Neu movie co ton tai va trung voi movie dang duoc select thi an detail
        if (selectedMovie && selectedMovie.id === movie.id) {
            setSelectedMovie(null)
            setSelectedMovieList(null)
            // Neu khong co select hoac bam vao movie moi thi update
        } else {
            setSelectedMovie(movie)
            setSelectedMovieList(type)
        }
    }

      // ComponentDidMount khi component load lan dau thi goi api cho tat ca cac loai movie list => update state tuong ung
    React.useEffect(() => {
        fetchMovies(movieApi.fetchNetflixOriginals, setOriginMovies)
        fetchMovies(movieApi.fetchTrending, setTrendMovies)
        fetchMovies(movieApi.fetchTopRated, setTopRatedMovies)
        fetchMovies(movieApi.fetchActionMovies, setActionMovies)
        fetchMovies(movieApi.fetchComedyMovies, setComedyMovies)
        fetchMovies(movieApi.fetchHorrorMovies, setHorrorMovies)
        fetchMovies(movieApi.fetchRomanceMovies, setRomanceMovies)
        fetchMovies(movieApi.fetchDocumentaries, setDocMovies)
    } , [])

    return (
        // render original + xu huong + xep hang cao + hanh dong + hai + kinh di + lang man + tai lieu
        <div className='pt-4 bg-dark'>
            <MovieList
                movies={originMovies}
                title={''}
                vertical
                onSelectedMovie={(movie) => onSelectedMovie(movie, movieListType.ORIGIN)}
                selectedMovie={selectedMovieList === movieListType.ORIGIN ? selectedMovie : null}
            />
            <MovieList
                id={3}
                movies={trendMovies}
                title={'Xu hướng'}
                onSelectedMovie={(movie) => onSelectedMovie(movie, movieListType.TRENDING)}
                selectedMovie={selectedMovieList === movieListType.TRENDING ? selectedMovie : null}
            />
            <MovieList
                id={4}
                movies={topRatedMovies}
                title={'Xếp hạng cao'}
                onSelectedMovie={(movie) => onSelectedMovie(movie, movieListType.TOP_RATES)}
                selectedMovie={selectedMovieList === movieListType.TOP_RATES ? selectedMovie : null}
            />
            <MovieList
                movies={actionMovies}
                title={'Hoạt động'}
                onSelectedMovie={(movie) => onSelectedMovie(movie, movieListType.ACTION)}
                selectedMovie={selectedMovieList === movieListType.ACTION ? selectedMovie : null}
            />
            <MovieList
                movies={comedyMovies}
                title={'Hài'}
                onSelectedMovie={(movie) => onSelectedMovie(movie, movieListType.COMEDY)}
                selectedMovie={selectedMovieList === movieListType.COMEDY ? selectedMovie : null}
            />
            <MovieList
                movies={horrorMovies}
                title={'Kinh dị'}
                onSelectedMovie={(movie) => onSelectedMovie(movie, movieListType.HORROR)}
                selectedMovie={selectedMovieList === movieListType.HORROR ? selectedMovie : null}
            />
            <MovieList
                movies={romanceMovies}
                title={'Lãng mạn'}
                onSelectedMovie={(movie) => onSelectedMovie(movie, movieListType.ROMANCE)}
                selectedMovie={selectedMovieList === movieListType.ROMANCE ? selectedMovie : null}
            />
            <MovieList
                movies={docMovies}
                title={'Tài liệu'}
                onSelectedMovie={(movie) => onSelectedMovie(movie, movieListType.DOCUMENT)}
                selectedMovie={selectedMovieList === movieListType.DOCUMENT ? selectedMovie : null}
            />
        </div>
    )
}

export default MovieContent