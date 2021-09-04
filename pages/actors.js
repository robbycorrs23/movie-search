import { useState } from "react"
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ActorSearch from '../components/ActorSearch'
import MovieDisplay from '../components/MovieDisplay'

export default function Top20() {
    const [current, setCurrent] = useState(878)
    const [genres, setGenres] = useState([])

    return (
        <div className="flex flex-col h-screen justify-between">
            <Head>
                <title>Movie Search Database</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <Navbar /> 
            </div>

            <ActorSearch />

            


            <Footer />
        </div>
    )
}