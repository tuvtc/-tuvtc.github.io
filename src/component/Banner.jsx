// Import du lieu
import React from "react"
import './Banner.css'
import { movieApi } from '../api/movieApi'

// Tao function component Banner
function Banner() {
    // State movie de hien thi banner
    const [movie, setMovie] = React.useState(null)
    const fetchMoviesForBanner = async () => {
        try {
            // get Original tu api
            const response = await movieApi.fetchNetflixOriginals()
            console.log(response.data.results)
            const movieList = response.data.results
            const movieInBanner = movieList[
                // Lay index ngau nhien
                Math.floor(Math.random() * movieList.length)
            ]
            // set state movie voi movie random
            setMovie(movieInBanner)
        } catch (e) {
            alert(JSON.stringify(e.message))
        }
    }

    // ComponentDidMount khi component load lan dau thi goi api lay banner
    React.useEffect(() => {
        fetchMoviesForBanner()
    } , [])

    // destructering movie
    const { backdrop_path, name, overview } = movie || {}

    // Render + style banner
    return(
        <div>
            <div className="d-flex align-items-end pb-5" style={{
                backgroundImage: backdrop_path ? `url(${process.env.REACT_APP_MOVIE_DATABASE_IMG_URL}${backdrop_path})` : 'none',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                minHeight: '650px'
            }}>
                <div className="text-white ps-4 w-25">
                    <h2 className="mb-5 fw-bold fs-1">{name}</h2>
                    <div className="mb-2">
                        <button className='btn btn-dark me-2'>Play</button>
                        <button className='btn btn-dark'>My List</button>
                    </div>
                    <p className="overview">{overview}</p>
                </div>
            </div>

        </div>

    )
}

export default Banner