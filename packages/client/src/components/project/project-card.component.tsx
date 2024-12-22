import {Project} from "../../types/project.type.ts";
import {NavLink} from "react-router";

export default function ProjectCard({project: {title, description, coverImage, githubURL, liveURL}}: {
  project: Project
}) {
  return (
    <div className={"bg-background border-white border-4 text-white rounded-lg"}>
      <img className={"rounded-t"} src={coverImage.formats.small.url} alt={coverImage.alternativeText}/>

      <div id="card-content" className="p-4 flex flex-col gap-4">

        <div className={"flex justify-between items-center"}>
          <h3 className={"font-serif text-2xl"}>{title}</h3>

          {liveURL ?
            <NavLink to={liveURL} className={"underline"}>demo</NavLink> :
            <NavLink to={githubURL} className={"underline"}>github</NavLink>}

        </div>

        <p className={"text-sm opacity-50"}>{description.toLowerCase()}</p>
      </div>
    </div>
  )
}