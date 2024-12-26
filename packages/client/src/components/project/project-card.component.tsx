import {motion} from "motion/react";
import {Project} from "../../types/project.type.ts";
import {NavLink} from "react-router";

export default function ProjectCard({
                                      project: {
                                        slug,
                                        title,
                                        description,
                                        coverImage,
                                        technologies
                                      }
                                    }: {
  project: Project
}) {
  return (
    <motion.div
      initial={{scale: 0.8, opacity: 0}}
      animate={{scale: 1, opacity: 1, transition: {duration: 0.2}}}
      whileHover={{
        scale: 1.05,
        transition: {duration: 0.2}
      }} className={"bg-background border-white border-4 text-white rounded-lg"}>
      <NavLink to={`/projects/${slug}`}>
        <img className={"rounded-t aspect-video"} src={coverImage.formats.small.url} alt={coverImage.alternativeText}/>

        <div id="card-content" className="p-4 flex flex-col gap-4 text-left">

          <h3 className={"font-serif text-2xl"}>{title}</h3>

          <div className="flex gap-4 flex-wrap">
            {
              technologies.map(({id, name}) => (
                <motion.div whileHover={{
                  scale: 1.05,
                  transition: {duration: 0.2}
                }} key={id} className={"bg-primary text-background px-2 py-1 rounded text-sm hover:underline"}>
                  {name}
                </motion.div>
              ))
            }
          </div>

          <p className={"text-sm opacity-50"}>{description.toLowerCase()}</p>
        </div>
      </NavLink>
    </motion.div>
  )
}