import Image from "next/image"
import { useEffect, useState } from "react"
import { Movie } from "typings"

// import { ChevronLeftIcon, ChevronRightIcon } from ''


interface Props{
    netflixOriginals: Movie[]
}

const baseUrl = 'https://image.tmdb.org/t/p/original'

export default function banner({netflixOriginals}:Props) {
    const [movie , setMovie] = useState<Movie | null>(null)

    useEffect(() => {
        setMovie(netflixOriginals[Math.floor(Math.random()* netflixOriginals.length)])
    }, [netflixOriginals])

    console.log(movie)
    
  return (
    <div className="flex flex-col justify-start space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end" >
        <div className="absolute top-0 left-0 h-[90vh] w-full">
            {/* image will be here  */}
            <Image src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`} 
            alt={'movie poster here'}
            objectFit='cover'
            layout='fill' 
            />
        </div>
        <h1 className="text-2xl  font-bold  md:text-3xl lg:text-5xl relative">
            {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <p className="relative text-shadow-lg max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-xl lg:text-xl" >
            {movie?.overview}
        </p>
        <div className="relative">
            <button className="bannerButton mx-2 lg:w-40 w-auto bg-white text-black">
                <i className="bi bi-play h-4 w-4 md:h-5 " />Paly
            </button> 
            <button className="bannerButton bg-[gray]/70">More Info <i className="bi bi-info-circle-fill"></i></button> 
        </div>
    </div>
  )
}
