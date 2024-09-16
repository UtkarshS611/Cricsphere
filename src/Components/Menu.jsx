import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";
import { CgMenuMotion } from "react-icons/cg";

const Menu = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    
    return (
        <section>
            <div onClick={handleMenuToggle} className='text-md font-semibold flex items-center gap-2 border-[1.5px] p-2 border-[#000] rounded-lg cursor-pointer'>
                    <p className='hidden sm:block'>Menu</p>
                    <CgMenuMotion/>
            </div>
            <div className={` ${isMenuOpen? "translate-x-0" : "translate-x-[100%]"} absolute bg-white h-screen top-0 right-0 w-[20rem] duration-200`}>
                <button onClick={handleMenuToggle} className='border-2 border-black rounded-lg p-2 absolute right-[1rem] top-[1.5rem]'>
                    <IoMdClose/>
                </button>
            </div>
        </section>
    )
}

export default Menu
