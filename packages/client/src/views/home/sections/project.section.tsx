import {useQuery} from "@tanstack/react-query";

import {fetchHomePageProjects} from "../../../api/project.api.ts";
import {Project} from "../../../types/project.type.ts";
import ProjectCard from "../../../components/project/project-card.component.tsx";
import {NavLink} from "react-router";

export default function ProjectSection() {

  const {data: projects, isLoading} = useQuery({queryKey: ['homepage'], queryFn: fetchHomePageProjects});

  return (
    <section id={"projects"} className={"text-white bg-background container mx-auto"}>
      <h2 className={"font-serif text-6xl mb-20 mt-10"}>Projects</h2>

      {
        isLoading && <p className={"my-64 w-full text-center"}>loading projects...</p>
      }

      {
        projects && <div className={"grid w-full grid-cols-2 lg:grid-cols-3 gap-8"}>
          {
            projects.map((project: Project) => (
              <ProjectCard key={project.documentId} project={project}/>
            ))
          }
          </div>
      }


      <NavLink to={"/projects"}
               className={"h-20 my-10 flex justify-center items-center underline"}>
        <p>view all projects</p>
      </NavLink>

    </section>
  )
}