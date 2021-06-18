import React from 'react'

//option 1: const movie = props.movie  
//option 2: use destructing const {movie} = props -  same as above
//option 3: MovieCard({movie}) - pass movie as prop and then <MovieCard movie={movie} key={movie.key}/> with id
export default function MovieCard({movie}) {
	return (
		<div className='card' key={movie.id}>
			<img 
				className='card--image' 
				src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
				alt={movie.title + ' poster'}
			/>

			<div className='card--content'>
				<h2 className='card--title'>{movie.title}</h2>
				<p><small>RELEASE DATE: {movie.release_date}</small></p>
				<p><small>RATING: {movie.vote_average}</small></p>
				<p className='card--desc'>{movie.overview}</p>
			</div>	
								
		</div>
	)
} 