import { useState, useEffect } from 'react'

export default function MovieDisplay ({ current }) {
    const [ movieList, setMovieList ] = useState([])
    
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=${current}&page=1`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMovieList(data.results))
            .catch(err => console.error(err))
    }, [url])

    return (
        <div className='flex flex-wrap justify-center align-center mx-3'>
            {movieList.slice(0, 200).map(movie =>
                <div className="m-4">
                    <img className='w-60 h-90' src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt=''/>
                    <p className='w-60 font-bold text-sm text-center'>{movie.title}</p>
                </div>
            )}
        </div>
    )
}