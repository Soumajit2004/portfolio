import {useQuery} from "@tanstack/react-query";
import {fetchProjectBySlug} from "../../api/project.api.ts";
import {NavLink, useParams} from "react-router";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import rehypeRaw from "rehype-raw";
import {Carousel} from "react-responsive-carousel";
import {motion} from "motion/react";

export default function ProjectView() {

  const params = useParams()

  const {data: project, isLoading} = useQuery({
    queryKey: ['project', 'slug'],
    queryFn: () => fetchProjectBySlug(params["projectSlug"])
  })

  return (
    <div className={"text-white container mx-auto"}>
      {
        isLoading ? <p className={"text-center my-80 "}>loading...</p> :
          project ? (
            <div className={"my-8 grid grid-cols-3 gap-8"}>

              <div className={"flex flex-col gap-4 col-span-3"}>
                <h1 className={"text-4xl font-serif"}>{project.title}</h1>
                <p className={"opacity-50 text-sm lg:text-md"}>{project.description.toLowerCase()}</p>
                <hr/>
              </div>

              <Carousel className={"col-span-3 lg:col-span-2"} autoPlay infiniteLoop useKeyboardArrows autoFocus
                        centerMode centerSlidePercentage={90}>
                {
                  project.images.map(image => (
                    <div key={image.id}>
                      <img src={image.url} alt={image.alternativeText}/>
                    </div>
                  ))
                }
              </Carousel>

              <div className="col-span-3 lg:col-span-1 flex flex-col gap-8">

                <div id="links" className="flex flex-col gap-4 bg-secondary/50 p-4 rounded">
                  <h3 className={"text-2xl font-serif"}>External Links</h3>
                  {
                    project.links.map(link => (
                      <NavLink target={"_blank"} to={link.url} key={link.id} className="underline text-sm lg:text-md">
                        {link.linkType}
                      </NavLink>
                    ))
                  }
                </div>

                <div id="links" className="flex flex-col gap-4 bg-secondary/50 p-4 rounded">
                  <h3 className={"text-2xl font-serif"}>Technologies</h3>
                  <div className="flex gap-4 flex-wrap">
                    {
                      project.technologies.map(technology => (
                        <motion.div
                          whileHover={
                            {scale: 1.05}
                          }
                          key={technology.id}
                          className={"p-2 bg-primary text-black rounded flex gap-2 items-center min-w-max flex-nowrap"}>
                          <img src={technology.icon.url} alt={technology.icon.alternativeText}
                               className={"w-5 aspect-square"}/>
                          <p className={"text-sm"}>
                            {technology.name}
                          </p>
                        </motion.div>
                      ))
                    }
                  </div>
                </div>
              </div>

              <Markdown remarkPlugins={[remarkBreaks]} rehypePlugins={[rehypeRaw]}
                        className={"bg-secondary/50 p-4 rounded col-span-3 lg:col-span-2 text-sm lg:text-md text-justify"}>
                {project.content.replace(/\n/gi, "&nbsp; \n")}
              </Markdown>

            </div>
          ) : <p className={"text-center my-80 "}>project not found</p>
      }
    </div>
  );
}