import { Roboto, Work_Sans } from "next/font/google";
import Crm from "@/components/Crm";
import People from "@/components/People";
import Booking from "@/components/Booking";
import Telehealth from "@/components/Telehealth";
import Food from "@/components/Food";
import Social from "@/components/Social";
import CarSharing from "@/components/CarSharing";
import { setupHoverListeners } from "@/utils/Hovers";
import { useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react/dist";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ['400', '600'],
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ['400'],
});

export default function Home() {

  const mainDiv = useRef()

  // The short explanation of this is every svg is aligned by the bottom in the grid,
  // and have a different translate-y, but every one of them will go to 0 while scrolling,
  // after that a big chunk of css is added to handle the hover states.

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainDiv.current,
        start: 'top top',
        end: 'bottom 72%',
        once: true,
        scrub: true,
      },
    });
    tl.to(".scroll-animation", {
      y: 0,
      ease: "power1.in",
      onComplete: setupHoverListeners,
    });
  })


  return (
    <main className={`text-title-white ${workSans.className}`}>
      <div ref={mainDiv} className="pt-40 mb-24 relative z-10">
        <div className="text-center mb-32">
          <h1 className="font-semibold text-7xl leading-tight mb-6">All apps in the world <br /> share the same DNA</h1>
          <h2 className="text-3xl text-subtitle-grey leading-normal">Think about infrastructure, notifications, social <br /> auth. There&apos;s over 70% overlap in functionality. </h2>
        </div>
        <div className={`mx-auto w-11/12 lg:w-[90%] ${roboto.className} text-grey-grid
         text-lg grid grid-cols-7 justify-items-center items-end mb-24`}>
          <Crm />
          <People />
          <Booking />
          <Telehealth />
          <Food />
          <Social />
          <CarSharing />
        </div>
      </div>
      <div className="pb-24 scroll-animation flex gap-10 justify-between items-center w-11/12 max-w-6xl -translate-y-7 mx-auto">
        <p className="text-3xl lg:text-4xl font-semibold leading-snug flex-1">Don&apos;t reinvent the wheel <br /> every time you build a <br /> new app.</p>
        <p className="text-xl lg:text-2xl flex-1 lg:leading-relaxed text-subtitle-grey">Instead, focus on what makes your app unique. We did the heavy lifting for you already. Just plug into our pre-made feature-suite and kickstart your project.</p>
      </div>
    </main>
  );
}
  {/* I probably could have made all of those components into a single one
  with conditionals for the structure and classes, and an array to loop with 
  different properties but it would have taken a lot more time to make than 
  the actual animation */}
