import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'


const Origins = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    document.querySelectorAll(".elem").forEach((elem) => {
      let image = elem.querySelector("img");
      let tl = gsap.timeline();

      let xTransform = gsap.utils.random(-100 , 100);

      tl.set(
        image,
        {
          transformOrigin: `${xTransform < 0 ? 0 : "100%"}`
        },
        "start"
      )
        .to(
          image,
          {
            scale: 0,
            ease: "none",
            scrollTrigger:{
              trigger: image,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          },
          "start"
        )
        .to(elem , {
          xPercent: xTransform,
          ease: "none",
          scrollTrigger: {
            trigger: image,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
    });
  });

  return (
    <div className='w-full'>
      <div className='halloffame_grid relative bg-slate-800 grid grid-cols-8 grid-rows-20 gap-2 overflow-hidden z-40'>
        <div className='elem col-span-1 row-span-1' style={{"--r": 1 , "--c": 3 }} >
          <img src="../public/image1.jpg" alt="" />
        </div>
        <div className='elem col-span-1 row-span-1' style={{"--r": 1 , "--c": 7 }} >
          <img src="../public/image2.jpg" alt="" />
        </div>
        <div className='elem col-span-1 row-span-1' style={{"--r": 2 , "--c": 2 }} >
          <img src="../public/image3.jpg" alt="" />
        </div>
        <div className='elem col-span-1 row-span-1' style={{"--r": 2 , "--c": 6 }} >
          <img src="../public/image4.jpg" alt="" />
        </div>
        <div className='elem col-span-1 row-span-1' style={{"--r": 3 , "--c": 4 }} >
          <img src="../public/image5.jpg" alt="" />
        </div>
        <div className='elem col-span-1 row-span-1' style={{"--r": 3 , "--c": 8 }} >
          <img src="../public/image6.jpg" alt="" />
        </div>
        <div className='elem col-span-1 row-span-1' style={{"--r": 4 , "--c": 1 }} >
          <img src="../public/image7.jpg" alt="" />
        </div>
        <div className='elem col-span-1 row-span-1' style={{"--r": 4 , "--c": 4 }} >
          <img src="../public/image8.jpg" alt="" />
        </div>
        <div className='elem col-span-1 row-span-1' style={{"--r": 5 , "--c": 2 }} >
          <img src="../public/image9.jpg" alt="" />
        </div>
        <div className='elem col-span-1 row-span-1' style={{"--r": 5 , "--c": 6 }} >
          <img src="../public/image10.jpg" alt="" />
        </div>
        <div className='elem col-span-1 row-span-1' style={{"--r": 6 , "--c": 3 }} >
          <img src="../public/image11.jpg" alt="" />
        </div>
        <div className='elem col-span-1 row-span-1' style={{"--r": 6 , "--c": 7 }} >
          <img src="../public/image12.jpg" alt="" />
        </div>
        <div className='elem col-span-1 row-span-1' style={{"--r": 7 , "--c": 5 }} >
          <img src="../public/image13.jpg" alt="" />
        </div>
        <div className='elem col-span-1 row-span-1' style={{"--r": 7 , "--c": 8 }} >
          <img src="../public/image14.jpg" alt="" />
        </div>
        <div className='elem col-span-1 row-span-1' style={{"--r": 8 , "--c": 1 }} >
          <img src="../public/image15.jpg" alt="" />
        </div>
        <div className='elem col-span-1 row-span-1' style={{"--r": 8 , "--c": 2 }} >
          <img src="../public/image16.jpg" alt="" />
        </div>
        <div className='elem col-span-1 row-span-1' style={{"--r": 9 , "--c": 2 }} >
          <img src="../public/image17.jpg" alt="" />
        </div>
        <div className='elem col-span-1 row-span-1' style={{"--r": 9 , "--c": 6 }} >
          <img src="../public/image18.jpg" alt="" />
        </div>
        <div className='elem col-span-1 row-span-1' style={{"--r": 10 , "--c": 3 }} >
          <img src="../public/image19.jpg" alt="" />
        </div>
        <div className='elem col-span-1 row-span-1' style={{"--r": 10 , "--c": 7 }} >
          <img src="../public/image20.jpg" alt="" />
        </div>
        <div className=' absolute font-primary hidden sm:block sm:text-4xl font-light text-primary top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
          Excellence, Resilience, Immortality
        </div>
      </div>
      <div className='h-screen'>
        <div className='w-full text-center font-semibold sm:text-4xl italic py-6 sm:py-[20vh] px-[10vw]'>
          The Hall of Fame stands as a timeless tribute to the cricketers whose brilliance transcended boundaries, inspiring generations. From the elegant strokes to unyielding resilience, these icons have left an indelible mark on the game. Their journey is one of courage, determination, and passion that not only captivated fans but also redefined the spirit of cricket. Here, we celebrate the players who stood tall, battled with heart, and etched their names in the annals of history, forever enshrined in the golden legacy of the sport.
        </div>
        <div className='w-full text-center font-semibold font-hindi text-2xl sm:text-9xl italic'>
          धन्यवाद 
        </div>
      </div>
    </div>
  )
}

export default Origins
