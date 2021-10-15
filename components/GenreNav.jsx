import { useState, useEffect } from "react"

export default function GenreNav({ genres, setGenres, setCurrent}) {

    useEffect (() => {
        fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.API_KEY}&language=en-US`)
            .then(res => res.json())
            .then(data => setGenres(data.genres))
            .catch(err => console.error(err))

    }, [])

    return (
        <>
            <div className="flex flex-wrap justify-center align-center mx-auto w-4/5 rounded-lg py-2">
                {genres.map(genre => 
                    <button 
                        className='m-1 py-1 px-2 bg-gray-500 text-white hover:bg-red-400' 
                        name={genre.name} 
                        onClick={() => setCurrent(genre.id)} >
                        {genre.name}
                    </button>)}
            </div>
        </>
    )
}
