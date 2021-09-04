import { useState, useEffect } from 'react'
import axios from 'axios'

export default function ActorSearch ( props ) {
    const [ actorsOne, setActorsOne ] = useState([])
    const [ actorsTwo, setActorsTwo ] = useState([])
    const [ actorsThree, setActorsThree ] = useState([])
    const [ actorsFour, setActorsFour ] = useState([])
    const [ isActive, setIsActive ] = useState(true)
    const [ selected, setSelected ] = useState([])
    const [ current, setCurrent ] = useState([])

    const activeBtnCls = 'flex justify-center max-w-sm w-auto bg-gradient-to-r from-indigo-500 via-orange-500 to-yellow-500 hover:from-red-600 hover:via-pink-600 hover:to-red-600 focus:outline-none text-white text-xs uppercase font-bold shadow-md rounded-xl mx-auto p-4 m-1 whitespace-nowrap'
    const btnCls = 'flex justify-center max-w-sm w-3/5 md:w-auto lg:w-auto bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 hover:from-indigo-600 hover:via-pink-600 hover:to-red-600 focus:outline-none text-white text-xs uppercase font-bold shadow-md rounded-xl mx-auto p-4 m-1 whitespace-nowrap'

    let actorList = []

    const handleClick = (e) => {
        actorList.push(parseInt(e.target.value))
        e.target.className = activeBtnCls
        if (actorList.length === 2) {
            setSelected(actorList)
            setIsActive(!isActive)
        }
    }

    const changeOver = () => {
        setIsActive(!isActive)
        setCurrent([])
    }

    
    console.log(current.map(el => el.title))

    const fetchData = () => {
        const pageOneAPI = `https://api.themoviedb.org/3/person/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
        const pageTwoAPI = `https://api.themoviedb.org/3/person/popular?api_key=${process.env.API_KEY}&language=en-US&page=2`
        const pageThreeAPI = `https://api.themoviedb.org/3/person/popular?api_key=${process.env.API_KEY}&language=en-US&page=3`
        const pageFourAPI = `https://api.themoviedb.org/3/person/popular?api_key=${process.env.API_KEY}&language=en-US&page=4`
        const selectedActors = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_people=${selected[0]},${selected[1]}`

        const getPageOne = axios.get(pageOneAPI)
        const getPageTwo = axios.get(pageTwoAPI)
        const getPageThree = axios.get(pageThreeAPI)
        const getPageFour = axios.get(pageFourAPI)
        const getAnswer = axios.get(selectedActors)

        axios.all([ getPageOne, getPageTwo, getPageThree, getPageFour, getAnswer ]).then(
            axios.spread((...allData) => {
                const allDataOne = allData[0].data.results
                const allDataTwo = allData[1].data.results
                const allDataThree = allData[2].data.results
                const allDataFour = allData[3].data.results
                const allDataFive = allData[4].data.results

                setActorsOne(allDataOne)
                setActorsTwo(allDataTwo)
                setActorsThree(allDataThree)
                setActorsFour(allDataFour)
                setCurrent(allDataFive)
            })
        )
    }
    
    
    useEffect(() => {
        fetchData()
    }, [isActive])
    

    return (
        <>
            <div className="flex flex-col gap-y-1.5 max-w-screen-md content-center mx-auto">
                
                <h1 className='font-mono text-center text-3xl mt-7 mb-2'>
                    Actor Pairings
                </h1>
                    
                <p className='font-mono text-center text-xl mt-3 mb-4 mx-2'>
                    Select any two actors and see if there has ever been a movie with both of them.
                </p>

                {isActive ? null :
                <button
                    className='bg-black text-white w-max mx-auto px-4 py-2'
                    onClick={changeOver}>
                    RESET!
                </button>}
                
                <div className="flex flex-col md:flex-row lg:flex-row mb-3">
                    <div className="flex flex-col m-1">
                        {!isActive ? null : actorsOne.map(actor =>
                            <button 
                                type='button' 
                                key={actor.id}
                                value={actor.id}
                                onClick={isActive ? handleClick : null}
                                className={btnCls}>
                                {actor.name}
                            </button>
                        )}
                    </div>
                    <div className="flex flex-col m-1">
                        {!isActive ? null : actorsTwo.map(actor =>
                            <button 
                                type='button' 
                                key={actor.id} 
                                value={actor.id}
                                onClick={isActive ? handleClick : null}
                                className={btnCls}>
                                {actor.name}
                            </button>
                        )}
                    </div>
                    <div className="flex flex-col m-1">
                        {!isActive ? null : actorsThree.map(actor =>
                            <button 
                                type='button' 
                                key={actor.id}
                                value={actor.id}
                                onClick={isActive ? handleClick : null}
                                className={btnCls}>
                                {actor.name}
                            </button>
                        )}
                    </div>
                    <div className="flex flex-col m-1">
                        {!isActive ? null : actorsFour.map(actor =>
                            <button 
                                type='button' 
                                key={actor.id} 
                                value={actor.id}
                                onClick={isActive ? handleClick : null}
                                className={btnCls}>
                                {actor.name}
                            </button>
                        )}
                    </div>
                </div>
                <div>
                    {current.length > 0 && !isActive ? current.map(data => 
                        <div className='flex mb-6 w-4/6 mx-auto' key={data.id}>
                            <div className=''>
                            <img className='w-full' src={`https://image.tmdb.org/t/p/original/${data.poster_path}`} />
                            </div>
                        </div>
                    ) : current.length === 0 && isActive ? null : <h1 className='text-center text-3xl mb-4'>"No movies exist!"</h1>}
                </div>
                
            </div>
        </>
    )
}