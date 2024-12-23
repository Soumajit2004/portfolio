import {useQuery} from "@tanstack/react-query";
import {fetchAllTechnologies} from "../../../api/technology.api.ts";
import {motion} from "motion/react";

export default function TechnologiesSection() {

  const {data: technologies, isLoading} = useQuery({
    queryKey: ['technologies'],
    queryFn: fetchAllTechnologies
  })

  return (
    <section id={"technologies"} className={"py-10 text-white container mx-auto"}>

      <h3 className={"mb-10 text-4xl font-serif"}>Tech Stack</h3>

      {
        isLoading ? <p className={"text-center my-80"}>loading...</p> :
          <div className={"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"}>
            {
              technologies && technologies.map(technology => (
                <motion.div whileHover={{scale: 1.1}}
                            draggable
                            drag
                            dragSnapToOrigin
                            className={"border-2 bg-black relative overflow-hidden h-32 rounded hover:text-black hover:bg-white transition-colors"}>
                  <p className={"absolute top-4 left-4"}>{technology.name}</p>
                  <img key={technology.documentId} draggable={"false"} src={technology.icon.url} unselectable={"on"}
                       alt={technology.name}
                       className={"aspect-square h-40 absolute top-0-1/2 -right-1/4"}/>
                </motion.div>
              ))
            }
          </div>
      }

    </section>
  )
}