import React from 'react'
import { BsStars } from "react-icons/bs";
import Cards from './Cards';

const Home = () => {
  return (
    <section className='h-[300vh]'>
      <div className='flex justify-center mt-8 font-primary'>
        <div className='px-14 py-1 rounded-full font-medium flex items-center gap-2 border-[0.5px] bg-[#e3d5ca4e] border-[#bb9457]'>
          <BsStars />
          Welcome, Utkarsh
        </div>
      </div>
      <div className='drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] text-white tracking-wide text-4xl md:text-7xl uppercase flex flex-col items-center py-8 gap-2 md:gap-10 font-[Anton]'>
        <span>
          A cricketing experience 
        </span>
        <span>
          like no other
        </span>
      </div>
      <div>
        <Cards/>
      </div>
      <div className='font-primary grid grid-rows-8 lg:grid-rows-1 lg:grid-cols-4 px-10'>
        <div className='text-6xl row-span-1 sm:row-span-1 font-medium lg:col-span-1 p-0 lg:p-10'>
          AB<span className='italic'>O</span>UT
        </div>
        <div className='text-xl flex flex-col row-span-7 sm:row-span-4 gap-8 font-normal text-[#000000c4] lg:col-span-3 pt-10 pb-20'>
          <p>
            Cricket, originating in England in the late 16th century, has grown into a global sport with a rich history. Initially a simple bat-and-ball game, it became a professional sport by the 17th century, with the Marylebone Cricket Club (MCC) formalizing the rules in 1787. Lord's in London became the sport's spiritual home, and cricket soon spread across the British Empire.
          </p>
          <p className='hidden sm:block'>
            The first Test match, played between England and Australia in 1877, marked the start of international cricket. The Ashes, a famous series between the two nations, began in 1882, igniting one of the longest-standing rivalries in sport. The game continued to evolve, and in 1971, the first One-Day International (ODI) was played, introducing a faster-paced format that culminated in the creation of the ICC Cricket World Cup in 1975.
          </p>
          <p className='hidden sm:block'>
            In the 21st century, the introduction of Twenty20 (T20) cricket revolutionized the game, offering an even shorter and more dynamic format. The Indian Premier League (IPL), launched in 2008, became a global sensation, drawing players and fans from around the world.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Home
