import Image from "next/image"
import { Movie } from "typings"

interface Props{
    movie:Movie[]
}
const baseUrl = 'https://image.tmdb.org/t/p/original'

export default function thumbnail({movie}:Props) {
  
    return (
        <div className="relative h-28 gri min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36
        md:min-w-[260px] md:hover:scale-105">
        {
            movie.map((movie)=>{
                return(
                    <Image src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`} 
                        alt={'movie poster here'}
                        className='rounded-lg object-cover md:rounded-lg'
                        // objectFit='cover'
                        layout='fill' 
                        />
                )
            })
        }
    </div>
  )
}
