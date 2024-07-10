import { useGSAP } from '@gsap/react'
import React from 'react'
import { animateWithGsap } from '../utils/animations'
import { explore1Img, explore2Img, exploreVideo } from '../utils'
import gsap from 'gsap'

const Features = () => {
  const videoRef = React.useRef();


  useGSAP(() => {
    gsap.to('#exploreVideo', {
      scrollTrigger :{
          start: '-10% bottom',
          trigger: '#exploreVideo',
          toggleActions: 'play pause reverse restart',
},
  onComplete: () => {
    videoRef.current.play();
  }
})


    animateWithGsap('#features_title', {y: 0, opacity: 1})
    animateWithGsap('.g_grow', {
      scale:1, 
      opacity:1 ,
      ease: 'power1',
    },
    { scrub : 5.5 }
  )

  animateWithGsap('.g_text', {
   opacity:1,
   y:0,
   ease: 'power2.inOut',
   duration:1, 
  })
  } , [])


  return (
    <section className='h-full common-padding bg-zinc relative overflow-hidden'>
      <div className='screen-max-width'>
        <div className='mb-12 w-full'>
          <h1 id='features_title' className='section-heading'>Explore the full story.</h1>
        </div>

          {/* Two headings  */}
          <div className='flex flex-col justify-center items-center overflow-hidden'>
             <div className='mt-32 mb-24 pl-24'>
                <h2 className='text-5xl lg:text-7xl font-semibold'>IPhone.</h2>
                <h2 className='text-5xl lg:text-7xl font-semibold'>Forged in Titanium.</h2>
          
             </div>

              {/* video container */}
              <div className='flex flex-center flex-col sm:px-10'>
                <div className='relative h-[50vh] w-full items-center flex'>
                  <video playsInline id="exploreVideo" className='w-full h-full object-cover object-center' preload="none" muted autoPlay ref={videoRef}>
                    <source src={exploreVideo} type='video/mp4' />
                  </video>
                </div>

                {/* {images} */}
                <div className='flex flex-col w-full relative'>
                  <div className='feature-video-container'>
                    
                    <div className='overflow-hidden flex-1 h-[50vh]'>
                      <img className='feature-video g_grow' src ={explore1Img} alt="titanium" />

                    </div>
                    <div className='overflow-hidden flex-1 h-[50vh]'>
                      <img className='feature-video g_grow' src ={explore2Img} alt="titanium2" />
                    </div>

                  </div>
                  {/* text below the 2 images */}
                </div>
                  <div className='feature-text-container'>
                    <div className='flex-1 flex-center'>
                        <p className='feature-text g_text'>iphone 15 Pro is {' '}
                          <span className='text-white'>
                            the first IPhone to feature an aerospace-grade titanium design
                          </span>
                          {' '}using the same alloy that spacecrafts use for missions to Mars.
                        </p>
                    </div>
                      {/* duplicate text  */}
                    <div className='flex-1 flex-center'>
                        <p className='feature-text g_text'>Titanium has one of the best strength to weight ratio than any metal, making these our  {' '}
                          <span className='text-white'>
                            lightest Pro models ever
                          </span>
                         {' '} You 'll feel the difference at first touch.'
                        </p>
                    </div>

                    </div> 

              </div>
          </div>
      </div>
    </section>
  )
}

export default Features