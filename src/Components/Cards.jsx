import React from 'react'
import Card1 from "../Assets/Card1.jpg"
import Card2 from "../Assets/Card2.jpg"
import Card3 from "../Assets/Card3.jpg"

const Cards = () => {
    return (
        <div className=' py-14 flex justify-center gap-2'>
            <div className="h-[25rem] rotate-[12deg] grayscale-[50%] hover:grayscale-0 duration-200 cursor-pointer w-[23rem] hover:w-[50rem] hover:rotate-0 bg-[url('../public/card2.jpg')] bg-no-repeat bg-center rounded-[2rem] bg-cover bg-blue-100 shadow-xl">
            </div>
            <div className="h-[25rem] z-10 grayscale-[50%] hover:grayscale-0 duration-200 cursor-pointer w-[23rem] bg-[url('../public/card1.jpg')] shadow-xl hover:w-[50rem] bg-no-repeat bg-center rounded-[2rem] bg-cover bg-blue-100">
            </div>
            <div className="h-[25rem] rotate-[-12deg]  grayscale-[50%] hover:grayscale-0 duration-200 cursor-pointer w-[23rem] hover:w-[50rem] shadow-xl hover:rotate-0 bg-[url('../public/card3.jpg')] bg-no-repeat bg-center rounded-[2rem] bg-cover bg-blue-100">
            </div>
        </div>
    )
}

export default Cards
