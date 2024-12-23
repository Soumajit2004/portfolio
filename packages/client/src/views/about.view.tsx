import Markdown from "react-markdown";
import {useQuery} from "@tanstack/react-query";
import {fetchAboutMeContent} from "../api/page-content.api.ts";

export default function AboutView() {

  const {data: content} = useQuery({queryKey: ["about-me"], queryFn: fetchAboutMeContent});

  return (
    <main className={"container mx-auto my-10 text-white"}>
      <h1 className={"font-serif text-4xl mb-10"}>About Me</h1>

      <div className="grid lg:grid-cols-3">

        {content &&
            <Markdown className={"lg:col-span-2 flex flex-col gap-4 text-justify"}>
              {content}
            </Markdown>
        }

      </div>
    </main>
  )
}