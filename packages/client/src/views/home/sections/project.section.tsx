import {useQuery} from "@tanstack/react-query";

import {fetchHomePageProjects} from "../../../api/project.api.ts";
import {Project} from "../../../types/project.type.ts";
import ProjectCard from "../../../components/project/project-card.component.tsx";
import {NavLink} from "react-router";
import {motion} from "motion/react";

export default function ProjectSection() {

  const {data: projects} = useQuery({queryKey: ['homepage'], queryFn: fetchHomePageProjects});

  return (
    <section id={"projects"} className={"text-white bg-background h-screen container mx-auto"}>
      <h2 className={"font-serif text-6xl py-16"}>Projects</h2>

      <div className={"grid w-full grid-cols-2 lg:grid-cols-3 gap-8"}>
        {
          projects?.map((project: Project) => (
            <ProjectCard key={project.documentId} project={project}/>
          ))
        }

        <motion.div
          initial={{scale: 0.5}}
          animate={{scale: 1, transition: {duration: 0.2}}}
          whileHover={{
            scale: 1.05,
            transition: {duration: 0.2}
          }}
          className={"h-full hover:underline border-white rounded border-4 flex flex-col justify-center items-center col-span-2 lg:col-span-1 py-4"}>
          <NavLink to={"/projects"}
          >
            <h3>View all projects</h3>
          </NavLink>
        </motion.div>

      </div>
    </section>
  )
}