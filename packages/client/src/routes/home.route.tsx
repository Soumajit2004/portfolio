// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import Donut from 'react-spinning-donut';

import {motion} from 'motion/react';
import {NavLink} from "react-router";

export default function Home() {
  return (
    <section
      className={"relative h-[90vh] max-h-[90vh] overflow-hidden mx-auto bg-background text-white px-2 py-4"}>

      <div className="relative container mx-auto w-full h-full">
        <div
          className={"container absolute left-0 top-[5%] md:top-[10%] xl:top-1/4 max-w-[90%] sm:max-w-[70%] md:max-w-[60%] flex flex-col gap-4 "}>

          <h1 className={"text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-relaxed"}>
            Weaving dreams into code,<br/>
            I craft the web’s silent poetry.
          </h1>

          <p className={"text-sm sm:text-md lg:text-lg text-white/50 text-justify"}>
            I’m a web developer—fluent in React, Node.js and the art of Googling errors faster than they appear.
          </p>

          <div className="flex mt-8 gap-4">
            <NavLink to="/" className="underline text-md lg:text-lg">download resume</NavLink>
            <NavLink to="/contact" className="underline text-md lg:text-lg">contact me</NavLink>
          </div>
        </div>
      </div>


      <motion.div initial={{opacity: .5}}
                  whileHover={{opacity: .8}}
                  className="absolute bottom-0 right-32">
        <Donut color={"white"} scaleX={3} scaleY={1.5} fontSize={8}/>
      </motion.div>
    </section>
  );
}