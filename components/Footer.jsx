import Link from 'next/link'
import Image from 'next/image'
import GitHub from '../public/github.png'
import LinkedIn from '../public/linkedin.png'


export default function Footer () {
    return (
        <>
            <footer className="flex flex-col md:flex-row justify-between items-center w-full py-4 bg-red-500 text-white static bottom-0">
                <div className='mb-2 ml-4'>
                    Powered by 
                    <Link href='https://www.themoviedb.org/'>
                        <a className='pl-1 hover:text-yellow-300'>The Movie Database!</a>
                    </Link>
                </div>
                <div className='flex flex-row font-bold py-2 px-6 rounded-lg'>
                    <div className='mr-4'>
                        <Link passhref='true' href="https://github.com/robbycorrs23/moviesearch">
                            <Image
                                className='bg-blend-normal cursor-pointer'
                                src={GitHub}
                                width='30'
                                height='30' />
                        </Link>
                    </div>
                    <div>
                        <Link
                            passhref='true'
                            href="https://linkedin.com/in/robbycorrs">
                            <Image
                                className='bg-blend-normal cursor-pointer'
                                src={LinkedIn}
                                width='30'
                                height='30' />
                        </Link>
                    </div>
                </div>
            </footer>
        </>
    )
}
