import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Image1 from "../Assets/image1.jpg"
import Image2 from "../Assets/image2.jpg"
import Image3 from "../Assets/image3.jpg"
import Image4 from "../Assets/image4.jpg"
import Image5 from "../Assets/image5.jpg"
import Image6 from "../Assets/image6.jpg"
import Image7 from "../Assets/image7.jpg"
import Image8 from "../Assets/image8.jpg"
import Image9 from "../Assets/image9.jpg"
import Image10 from "../Assets/image10.jpg"
import Image11 from "../Assets/image11.jpg"
import Image12 from "../Assets/image12.jpg"
import Image13 from "../Assets/image13.jpg"
import Image14 from "../Assets/image14.jpg"
import Image15 from "../Assets/image15.jpg"
import Image16 from "../Assets/image16.jpg"
import Image17 from "../Assets/image17.jpg"
import Image18 from "../Assets/image18.jpg"
import Image19 from "../Assets/image19.jpg"
import Image20 from "../Assets/image20.jpg"


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
          <img src={Image1} alt="" />
        </div>
        <div className='elem col-span-1 row-span-1' style={{"--r": 1 , "--c": 7 }} >
          <img src={Image2} alt="" />
        </div>
        <div className='elem col-span-1 row-span-1' style={{"--r": 2 , "--c": 2 }} >
          <img src={Image3} alt="" />
        </div>
        <div className='elem col-span-1 row-span-1' style={{"--r": 2 , "--c": 6 }} >
          <img src={Image4} alt="" />
        </div>
        <div className='elem col-span-1 row-span-1' style={{"--r": 3 , "--c": 4 }} >
          <img src={Image5} alt="" />
        </div>
        <div className='elem col-span-1 row-span-1' style={{"--r": 3 , "--c": 8 }} >
          <img src={Image6} alt="" />
        </div>
        <div className='elem col-span-1 row-span-1' style={{"--r": 4 , "--c": 1 }} >
          <img src={Image7} alt="" />
        </div>
        <div className='elem col-span-1 row-span-1' style={{"--r": 4 , "--c": 4 }} >
          <img src={Image8} alt="" />
        </div>
        <div className='elem col-span-1 row-span-1' style={{"--r": 5 , "--c": 2 }} >
          <img src={Image9} alt="" />
        </div>
        <div className='elem col-span-1 row-span-1' style={{"--r": 5 , "--c": 6 }} >
          <img src={Image10} alt="" />
        </div>
        <div className='elem col-span-1 row-span-1' style={{"--r": 6 , "--c": 3 }} >
          <img src={Image11} alt="" />
        </div>
        <div className='elem col-span-1 row-span-1' style={{"--r": 6 , "--c": 7 }} >
          <img src={Image12} alt="" />
        </div>
        <div className='elem col-span-1 row-span-1' style={{"--r": 7 , "--c": 5 }} >
          <img src={Image13} alt="" />
        </div>
        <div className='elem col-span-1 row-span-1' style={{"--r": 7 , "--c": 8 }} >
          <img src={Image14} alt="" />
        </div>
        <div className='elem col-span-1 row-span-1' style={{"--r": 8 , "--c": 1 }} >
          <img src={Image15} alt="" />
        </div>
        <div className='elem col-span-1 row-span-1' style={{"--r": 8 , "--c": 2 }} >
          <img src={Image16} alt="" />
        </div>
        <div className='elem col-span-1 row-span-1' style={{"--r": 9 , "--c": 2 }} >
          <img src={Image17} alt="" />
        </div>
        <div className='elem col-span-1 row-span-1' style={{"--r": 9 , "--c": 6 }} >
          <img src={Image18} alt="" />
        </div>
        <div className='elem col-span-1 row-span-1' style={{"--r": 10 , "--c": 3 }} >
          <img src={Image19} alt="" />
        </div>
        <div className='elem col-span-1 row-span-1' style={{"--r": 10 , "--c": 7 }} >
          <img src={Image20} alt="" />
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
