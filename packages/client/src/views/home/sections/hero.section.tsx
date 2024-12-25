import {NavLink} from "react-router";
import {motion} from "motion/react";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import Donut from 'react-spinning-donut';
import {fetchHomepageResumeURL} from "../../../api/page-content.api.ts";
import {useQuery} from "@tanstack/react-query";

export default function HeroSection() {

  const {data: resumeFileLink} = useQuery({
    queryKey: ['resumeFileLink'],
    queryFn: fetchHomepageResumeURL
  })

  return (
    <section
      id={"hero"}
      className={"relative h-[90vh] container mx-auto " +
        "overflow-x-visible bg-background text-white py-4"}>

      <div
        className={"container absolute left-0 top-[10%] md:top-[20%] xl:top-1/4 max-w-[90%] sm:max-w-[70%] md:max-w-[60%] flex flex-col gap-4 "}>

        <h1 className={"text-3xl md:text-4xl font-serif leading-relaxed"}>
          Weaving dreams into code,<br/>
          I craft the web’s silent poetry.
        </h1>

        <p className={"text-sm sm:text-md lg:text-lg text-white/50 text-justify"}>
          I’m a web developer—fluent in React, Node.js and the art of Googling errors faster than they appear.
        </p>

        <div className="flex mt-8 gap-4">
          <NavLink target={"_blank"} to={resumeFileLink ? resumeFileLink : "/"}
                   className="underline text-md lg:text-lg">
            download resume
          </NavLink>
          <NavLink to="/contact" className="underline text-md lg:text-lg">contact me</NavLink>
        </div>
      </div>


      <motion.div initial={{opacity: .5}}
                  whileHover={{opacity: .8}}
                  className="absolute bottom-0 right-0">
        <Donut color={"white"} scaleX={3} scaleY={1.5} fontSize={8}/>
      </motion.div>

    </section>
  )
}