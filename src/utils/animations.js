import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger);


export const animateWithGsapTimeLine = (timeline, rotationRef , rotationState, firstTarget, secondTarget, animationProps ) => {
    timeline.to(rotationRef.current.rotation, {
        y: rotationState, 
        duration: 1,
        ease: 'Power2.inOut'
    })

    timeline.to(firstTarget, 
    {
        ...animationProps,
        ease: 'Power2.inOut'
    }, '<'
    )

    timeline.to( secondTarget, 
        {
            ...animationProps,
            ease: 'Power2.inOut'
        }, '<'
        )

}


export const animateWithGsap = (target, animationProps, scrollProps ) => {
    gsap.to(target, {
        ...animationProps,
        scrollTrigger :{
            start: 'top 85%',
            trigger: target,
            toggleActions: 'restart reverse restart reverse',
            ...scrollProps
}})
}