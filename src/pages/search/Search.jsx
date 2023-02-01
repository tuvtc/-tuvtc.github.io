// import du lieu + css
import React from 'react';
import SearchForm from '../../component/SearchForm';
import { MovieCard } from '../../component/MovieList';
import { movieApi } from '../../api/movieApi';
import './Search.css'
import MovieDetail from '../../component/MovieDetail';

// function component Search
const Search = () => {
	const [searchMovies, setSearchMovie] = React.useState([])
	const [selectedMovie, setSelectedMovie] = React.useState(null)

	// Ham onSearch => kiem phim theo value nguoi dung nhap vao
	const onSearch = async (value) => {
		// reset selected
		setSelectedMovie(null)
		// call API du vao gia tri value
		const response = await movieApi.searchMovieByName(value)
		console.log(response.data.results)
		setSearchMovie(response.data.results)
	  }

	  const onReset = () => {
		setSearchMovie([])
		setSelectedMovie(null)
	  }

	const onSelectedMovie = (movie) => {
	// Neu co selected va trung id thi an, khong trung hien thi, tuong tu ben movieList, logic dong mo detail
		if (selectedMovie && selectedMovie.id === movie.id) {
			setSelectedMovie(null)
		} else {
			setSelectedMovie(movie)
		}
	}

	return (
		<div className='bg-dark'>
			<div className='app search-page d-flex align-items-center justify-content-center'>
				<SearchForm onSearch={onSearch} onReset={onReset}/>
			</div>
			<div>
				<h3 className='text-white ps-2'>Search Result</h3>
				<div className='d-flex flex-wrap gap-2 p-4'>
				{
					!!searchMovies.length && searchMovies.map(movie => {
						return (
							<MovieCard 
								vertical
								movie={movie}
								onSelectedMovie={() => onSelectedMovie(movie)}
							/>
						)
					})
				}
				</div>
				{
					selectedMovie && (
						<MovieDetail movie={selectedMovie}/>
					)
				}
			</div>
		</div>
	);
};

export default Search;
