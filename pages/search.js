import Head from 'next/head'
import Navbar from '../components/Navbar'
import SearchNow from '../components/SearchNow'
import Footer from '../components/Footer'

export default function Search() {
    return (
        <div className="flex flex-col h-screen justify-between">
            <Head>
                <title>Movie Search Database</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />

            <SearchNow />

            <Footer />
        </div>
    )
}