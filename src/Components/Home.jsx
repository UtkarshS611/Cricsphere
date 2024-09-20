import React from 'react'
import { BsStars } from "react-icons/bs";
import Cards from './Cards';
import { useLocation } from 'react-router-dom';
import Header from './Header';

const Home = () => {

  const location = useLocation();
  const formData = location.state;

  return (
    <section className='h-[500vh]'>

      <Header/>

      <div className='flex justify-center mt-8 font-primary'>
        <div className='px-14 py-2 rounded-full font-medium flex items-center gap-2 border-[0.5px] bg-[#e3d5ca4e] border-[#bb9457]'>
          <BsStars className='text-2xl' />
          Welcome, {formData?.firstname || 'Utkarsh'}
        </div>
      </div>
      <div className='tracking-wide text-4xl md:text-7xl uppercase flex flex-col items-center py-8 gap-2 md:gap-10 font-[Anton]'>
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
      <div className='text-9xl text-center py-5'>
        SELECTED HIGHLIGHTS
      </div>
      <div className='mt-6'>
        <div className='grid grid-cols-2 w-[80vw] mx-auto'>
          <div className='w-[25vw] m-auto'>
            <img src="../public/highlights1.jpg" alt="" />
          </div>
          <div className='flex flex-col justify-center gap-6 px-16'>
            <h2 className='text-5xl font-medium'>
              The Tied Test (1960)
            </h2>
            <p className='text-lg tracking-wide italic'>
              The first-ever tied Test match in cricket history occurred <br /> between Australia and the West Indies at the Brisbane <br /> Cricket Ground (Gabba) in 1960. <br /> It ended with both teams having the same score,  <br /> a rare and thrilling outcome in Test cricket.
            </p>
          </div>
        </div>
        <div className='grid grid-cols-2 w-[80vw] mx-auto'>
          <div className='flex flex-col justify-center  gap-6 px-16'>
            <h2 className='text-5xl font-medium'>
              India's 1983 World Cup Win
            </h2>
            <p className='text-lg tracking-wide italic'>
              India's unexpected victory in the 1983 <br /> Cricket World Cup is one of the greatest moments in the sport. <br /> Under the captaincy of Kapil Dev, <br /> India defeated the then-dominant West Indies at Lord’s, <br /> signaling the rise of Indian cricket on the global stage.
            </p>
          </div>
          <div className='w-[25vw] m-auto'>
            <img src="../public/highlights2.jpg" alt="" />
          </div>
        </div>
        <div className='grid grid-cols-2 w-[80vw] mx-auto'>
          <div className='w-[25vw] m-auto'>
            <img src="../public/highlights3.jpg" alt="" />
          </div>
          <div className='flex flex-col justify-center  gap-6 px-16'>
            <h2 className='text-5xl font-medium'>
              2005 Ashes Series
            </h2>
            <p className='text-lg tracking-wide italic'>
              The 2005 Ashes between England and Australia is considered <br /> one of the greatest Test series in cricket history. <br /> England won the series 2-1 in a closely contested battle, <br /> marking their first Ashes win in 18 years and revitalizing interest in Test cricket.
            </p>
          </div>
        </div>
        <div className='grid grid-cols-2 w-[80vw] mx-auto'>
          <div className='flex flex-col justify-center  gap-6 px-16'>
            <h2 className='text-5xl font-medium'>
              Sachin's 100th International Century
            </h2>
            <p className='text-lg tracking-wide italic'>
              Sachin Tendulkar became the first and only cricketer to score 100 international centuries, a landmark achievement in the history of the sport. His 100th century came against Bangladesh in 2012, cementing his legacy as one of the greatest players of all time.
            </p>
          </div>
          <div className='w-[25vw] m-auto'>
            <img src="../public/highlights4.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
