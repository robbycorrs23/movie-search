import Head from 'next/head'
import Navbar from '../components/Navbar'
import Link from 'next/link'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Head>
        <title>Movie Search Database</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <main id="bg-theater" className="h-full">
        <div className='w-3/5 flex flex-row justify-center content-center flex-col md:flex-row lg:flex-row mx-auto text-center my-12 md:my-32 lg:my-32'>
          <Link href="/search">
            <a className='p-2 mb-4 md:p-8 md:mr-6 lg:p-12 hover:scale-125 text-red-500 text-xl bg-white rounded'>Search</a>
          </Link>
          <Link href="/actors">
            <a className='p-2 mb-4 md:p-8 md:mr-6 lg:p-12 hover:scale-125 text-red-500 text-xl bg-white rounded'>Actors</a>
          </Link>
          <Link href="/top20">
            <a className='p-2 mb-4 md:p-8 lg:p-12 hover:scale-125 text-red-500 text-xl bg-white rounded'>Top 20s</a>
          </Link>
        </div>
      </main>
      
      

      <Footer />
    </div>
  )
}
