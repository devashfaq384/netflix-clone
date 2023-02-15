import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function header() {

    const [isScroll , setIsScroll] = useState(false)

    useEffect(() => {
        const handleScroll = ()=>{
            if(window.scrollY > 0){
                setIsScroll(true)
            }else{
                setIsScroll(false)
            }
        }

        window.addEventListener("scroll",handleScroll)
        
        return ()=>{
            window.removeEventListener("scroll",handleScroll)
        }
    }, [isScroll])
    

    return (
        <header className={`${isScroll && 'bg-[#141414]'}`}>
            <div className=" flex items-center space-x-2 md:space-x-10 ">
                <div className="text-red-600 text-2xl">NEtFliX</div>
                <ul className="hidden space-x-4 md:flex ">
                    <li className="headerLink">Home</li>
                    <li className="headerLink" >TV Shows</li>
                    <li className="headerLink" >Movies</li>
                    <li className="headerLink"  >New & Popular</li>
                    <li className="headerLink" >My List</li>
                </ul>
            </div>
            <div className='flex items-center space-x-4'>
                <i  className='bi bi-search'/>
                <p className='hidden lg:inline'>Kids</p>
                <i className='bi bi-bell-fill'/>
                <Link href='/account'>
                    <i className='bi bi-person-fill' />
                </Link>
            </div>
        </header>
    )
}
