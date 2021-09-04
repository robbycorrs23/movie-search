import Image from 'next/image'
import FilmLine from '../public/film-line.png'

export default function NavBar () {
    return (
        <>
            <nav className="flex flex-wrap items-center justify-between px-2 py-3 bg-red-500">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <Image className="object-contain fill-current h-8 w-8 mr-2" width="50" height="50" viewBox="0 0 54 54" src={FilmLine} />
                    <a href='/' className="font-semibold text-xl tracking-tight ml-2">Movie Search Land</a>
                </div>
                <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-right lg:w-auto">
                    <div className="text-sm lg:flex-grow">
                        <a href="/search" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            Search
                        </a>
                        <a href="/actors" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            Actors
                        </a>
                        <a href="/top20" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                            Top 20s
                        </a>
                    </div>
                </div>
            </nav>
        </>
    )
}
