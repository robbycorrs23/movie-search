import {useState, useEffect} from "react"

export default function SearchNow () {
    const [query, setQuery] = useState('')
    const [movies, setMovies] = useState([])
    const [ active, setActive ] = useState(false)

    const searchMovie = async event => {
        event.preventDefault()
        console.log(process.env.API_KEY);

        const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`

        try {
            const res = await fetch(url)
            const data = await res.json()
            setMovies(data.results)
        } catch (err) {
            console.error(err)
        }

    }

    const handleChange = (e) => {


        setActive(true)
        setQuery(e.target.value)
    }




    return (
        <>
            <div className="flex flex-col gap-y-1.5 max-w-screen-md content-center mx-auto px-8">
                <h1 className='font-mono text-3xl text-center mt-10 mb-2'>
                    Are you feeling lucky punk?
                </h1>
                <form className='mb-8 border-2 border-solid border-red-500 rounded-md p-4' onSubmit={searchMovie}>
                    <input 
                        className="pl-4 py-2 my-2 w-6/12 rounded bg-black text-white sm:text-xs"
                        type="text" 
                        name='query' 
                        autoComplete="name"
                        placeholder='Type Movie Name Here...'
                        value={query}
                        onChange={handleChange}
                        required
                    />
                    <button className='ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded' type="submit">Search Now</button>
                </form>
                <div>
                    {active ? movies.slice(0,5).map(movie =>

                        <div className="flex md:flex-row flex-col mb-2 md:mb-4">
                            <div className='w-full md:w-2/6 md:h-4/6'>
                                <img className='mb-4 w-full' src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
                            </div>
                            <div className='flex-1 mb-16 md:ml-4'>
                                <h1 className='font-bold text-3xl'>{movie.title}</h1>
                                <p className="my-2 italic text-gray-400">Release Date: {movie.release_date}</p>
                                <p className=''>{movie.overview}</p>
                            </div>
                        </div>
                    ) : query.length === 0 && active ? <p>No movies exist, check spelling!</p>  : null}

                </div>
            </div>
        </>
    )
}

