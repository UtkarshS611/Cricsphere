import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineSportsCricket } from "react-icons/md";
import { CgMenuMotion } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";



const Header = ({ setIsLoggedIn }) => {

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    }

  return (
    <header className="w-full relative p-4 flex justify-between items-center font-primary z-40">
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
        <div onClick={handleMenuToggle} className='text-md font-semibold flex items-center gap-2 border-[1.5px] p-2 border-[#000] rounded-lg cursor-pointer'>
          <p className='hidden sm:block'>Menu</p>
          <CgMenuMotion/>
        </div>
        <nav className={`${isMenuOpen? "translate-x-0" : "translate-x-[100%]"} z-40 duration-200  bg-[#fff] text-xl absolute right-0 top-0 h-screen flex flex-col gap-8 w-[50%] md:w-[30vw] lg:w-[20vw] items-start px-4 justify-center`}>
          <button onClick={handleMenuToggle} className='border-2 border-black rounded-lg p-2 absolute right-[1rem] top-[1.5rem]'>
            <IoMdClose/>
          </button>
          <Link onClick={handleMenuToggle} to="/home" className="px-2">Home</Link>
          <Link onClick={handleMenuToggle} to="/hall-of-fame" className="px-2">Hall of fame</Link>
          <Link onClick={handleMenuToggle} to="/Origins" className="px-2">Origins</Link>
          <button onClick={handleLogout} className="bg-red-200 rounded-full px-8 py-2 tracking-wide">Logout</button>
        </nav>
    </header>
  );
};

export default Header;
