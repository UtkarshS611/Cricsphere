import React from 'react'
import { MdOutlineSportsCricket } from "react-icons/md";
import Menu from './Menu';

const Header = () => {
    return (
        <header className='flex  w-full justify-between items-center px-4 py-6 bg-emerald-100'>
            <div className='text-md font-bold hidden sm:block'>
                    Where Cricket <br />
                <span className='flex items-center gap-1 ml-[12px]'>
                    <MdOutlineSportsCricket />
                    Comes Alive
                </span>
            </div>
            <div className='font-bold text-md sm:text-xl'>
                <span className='italic'>C</span>RIC <span className='italic'>S</span>PHERE
            </div>
            <Menu/>
        </header>
    )
}

export default Header
