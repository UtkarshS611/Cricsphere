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
    <div className='w-full '>
      <div className='halloffame_grid grid grid-cols-8 grid-rows-20 gap-2 overflow-hidden z-40'>
        <div className='elem col-span-1 row-span-1' style={{"--r": 1 , "--c": 3 }} >
          <img src="../public/col-1_1.jpg" alt="" />
        </div>
        <div className='elem col-span-1 row-span-1' style={{"--r": 1 , "--c": 7 }} >
          <img src="../public/col-1_1.jpg" alt="" />
        </div>
        <div className='elem col-span-1 row-span-1' style={{"--r": 2 , "--c": 2 }} >
          <img src="../public/col-1_1.jpg" alt="" />
        </div>
        <div className='elem col-span-1 row-span-1' style={{"--r": 2 , "--c": 6 }} >
          <img src="../public/col-1_1.jpg" alt="" />
        </div>
        <div className='elem col-span-1 row-span-1' style={{"--r": 3 , "--c": 4 }} >
          <img src="../public/col-1_1.jpg" alt="" />
        </div>
        <div className='elem col-span-1 row-span-1' style={{"--r": 3 , "--c": 8 }} >
          <img src="../public/col-1_1.jpg" alt="" />
        </div>
        <div className='elem col-span-1 row-span-1' style={{"--r": 4 , "--c": 1 }} >
          <img src="../public/col-1_1.jpg" alt="" />
        </div>
        <div className='elem col-span-1 row-span-1' style={{"--r": 4 , "--c": 4 }} >
          <img src="../public/col-1_1.jpg" alt="" />
        </div>
        <div className='elem col-span-1 row-span-1' style={{"--r": 5 , "--c": 2 }} >
          <img src="../public/col-1_1.jpg" alt="" />
        </div>
        <div className='elem col-span-1 row-span-1' style={{"--r": 5 , "--c": 6 }} >
          <img src="../public/col-1_1.jpg" alt="" />
        </div>
        <div className='elem col-span-1 row-span-1' style={{"--r": 6 , "--c": 3 }} >
          <img src="../public/col-1_1.jpg" alt="" />
        </div>
        <div className='elem col-span-1 row-span-1' style={{"--r": 6 , "--c": 7 }} >
          <img src="../public/col-1_1.jpg" alt="" />
        </div>
        <div className='elem col-span-1 row-span-1' style={{"--r": 7 , "--c": 5 }} >
          <img src="../public/col-1_1.jpg" alt="" />
        </div>
        <div className='elem col-span-1 row-span-1' style={{"--r": 7 , "--c": 8 }} >
          <img src="../public/col-1_1.jpg" alt="" />
        </div>
        <div className='elem col-span-1 row-span-1' style={{"--r": 8 , "--c": 1 }} >
          <img src="../public/col-1_1.jpg" alt="" />
        </div>
        <div className='elem col-span-1 row-span-1' style={{"--r": 8 , "--c": 2 }} >
          <img src="../public/col-1_1.jpg" alt="" />
        </div>
        <div className='elem col-span-1 row-span-1' style={{"--r": 9 , "--c": 2 }} >
          <img src="../public/col-1_1.jpg" alt="" />
        </div>
        <div className='elem col-span-1 row-span-1' style={{"--r": 9 , "--c": 6 }} >
          <img src="../public/col-1_1.jpg" alt="" />
        </div>
        <div className='elem col-span-1 row-span-1' style={{"--r": 10 , "--c": 3 }} >
          <img src="../public/col-1_1.jpg" alt="" />
        </div>
        <div className='elem col-span-1 row-span-1' style={{"--r": 10 , "--c": 7 }} >
          <img src="../public/col-1_1.jpg" alt="" />
        </div>
      </div>
      <div className='w-full h-[200vh] font-hindi text-[6rem]'>
        धन्यवाद
      </div>
    </div>
  )
}

export default Origins
