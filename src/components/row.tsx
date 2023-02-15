import { useRef, useState } from "react";
import { Movie } from "typings";
import Thumbnail from "./thumbnail";

interface Props{
    title : string,
    movies: Movie[]
}
export default function row({title , movies}:Props) {
    const rowRef = useRef<HTMLDivElement>(null)
    const [isMoved, setIsMoved] = useState(false)
  
    const handleClick = (direction: string) => {
      setIsMoved(true)

      if (rowRef.current) {
        const { clientLeft, clientWidth } = rowRef.current
        
        // if(d)
        const scrollTo = 
        direction === 'left'
        ? clientLeft + clientWidth*3 
        : clientLeft - clientWidth
        rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
      }
    }
  return (
    <div className="h-40 space-y-0.5 md:space-y-2">
        <h2 className="w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition
        duration-200 hover:text-white md:text-2xl">{title}</h2>
        <div className="group relative md:-ml-2 ">
            

            <i className="bi bi-caret-right absolute top-0 right-2 bottom-0 z-40 m-auto h-9 w-9 cursor-pointer 
            opacity-0 transition hover:scale-125 group-hover:opacity-100"
            onClick={()=> handleClick("left") }
            ></i>
            
            {/* Movie thumbnail is here  */}

            <div  className={`flex items-center scrollbar-hide space-x-0.5 overflow-x-scroll md:space-x-2.5 md:p-2${!isMoved && 'hidden'}`}
            ref={rowRef}
            >
                {
                    movies.map((movie)=>(
                        <Thumbnail movie={[movie]} />
                    ))
                }
            </div>

                <i className="bi bi-caret-left absolute top-0 left-2 bottom-0 z-40 m-auto h-9 w-9 cursor-pointer 
                opacity-0 transition hover:scale-125 group-hover:opacity-100" onClick={()=> handleClick("right")} ></i>
        </div>
    </div>
  )
}
