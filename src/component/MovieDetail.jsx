// import du lieu + css
import React from "react"
import { movieApi } from "../api/movieApi"
import './MovieDetail.css'

import YouTube from 'react-youtube';

// Function component Movie Detail
function MovieDetail (props) {
    const { movie } = props
    const { title, name, id, backdrop_path, release_date, vote_average, overview } = movie
    const [trailer, setTrailer] = React.useState(null)

    // goi api get trailer theo movie id
    const getTrailerLink = async () => {
        try {
            // Get trailer
            const response = await movieApi.getTrailersByMovieId(id)
            // Kiem trailer theo dieu kien
            const foundTrailer = response.data.results.find(item => {
                return (item.site === "YouTube" && ['Teaser', 'Trailer'].includes(item.type))
            })

            // Neu co trailer thi set trailer khong thi set null
            if (foundTrailer) {
                setTrailer(foundTrailer)
            } else {
                setTrailer(null)
            }
        } catch (error) {
            // Neu call that bai cung set null
            console.log(error.message)
            setTrailer(null)
        }
    }

    // ComponentDidMount khi component load lan dau thi call get trailer
    React.useEffect(() => {
        getTrailerLink()
    }, [movie])

    // Co trailer thi hien thi trailer khong thi show backdrop
    return (
        <div className="d-flex gap-5 detail-movie text-bg-dark p-4">
            <div className="movie-info">
                <h3>{title || name}</h3>
                <hr className="line-style"></hr>
                <p>Release Date: {release_date}</p>
                <p>Vote: {vote_average} / 10</p>
                <p>{overview}</p>
            </div>
            <div className="movie-trailer">
                {/* Hien thi trailer */}
                {
                    trailer && (
                        <YouTube 
                            containerClassName="movie-trailer-content"
                            videoId={trailer.key}
                            opts={{
                                height: '100%',
                                width: '100%',
                                playerVars: {
                                    autoplay: 0,
                                }
                            }}
    
                        />
                    )
                }
                {/* Hien thi backdrop */}
                {
                    !trailer && (
                        <img className="h-100" src={`${process.env.REACT_APP_MOVIE_DATABASE_IMG_URL}${backdrop_path}`} alt={title || name} />
                    )
                }
            </div>
        </div>
    )
}

export default MovieDetail