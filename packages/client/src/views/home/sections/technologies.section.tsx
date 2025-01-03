import {useQuery} from "@tanstack/react-query";
import {motion} from "motion/react";
import {fetchHomepageTechnologies} from "../../../api/page-content.api.ts";
import LoadingComponent from "../../../components/common/loading.component.tsx";
import {Technology} from "../../../types/technology.type.ts";

function TechnologyCard({technology}: { technology: Technology }) {
  return (
    <motion.div key={technology.documentId}
                whileHover={{scale: 1.1}}
                draggable
                drag
                dragSnapToOrigin
                className={"border-2 bg-black relative overflow-hidden h-32 rounded hover:text-black hover:bg-white transition-colors"}>
      <p className={"absolute top-4 left-4 z-20"}>{technology.name}</p>
      <img key={technology.documentId} draggable={"false"} src={technology.icon.url} unselectable={"on"}
           alt={technology.name}
           className={"aspect-square h-40 absolute top-0-1/2 -right-[10%]"}/>
    </motion.div>
  )
}


export default function TechnologiesSection() {

  const {data: technologies, isLoading} = useQuery({
    queryKey: ['technologies'],
    queryFn: fetchHomepageTechnologies
  })

  return (
    <section id={"technologies"} className={"py-10 text-white container mx-auto"}>

      <h2 className={"mb-10 text-3xl md:text-4xl font-serif"}>Tech Stack</h2>

      {isLoading && <LoadingComponent classname={"h-40"} loadingText={"loading skills..."}/>}

      {technologies && <div className={"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"}>
        {
          technologies.map(technology => <TechnologyCard technology={technology}/>)
        }
      </div>
      }


    </section>
  )
}