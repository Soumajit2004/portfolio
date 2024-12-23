import Markdown from "react-markdown";
import {useQuery} from "@tanstack/react-query";
import {fetchAboutMeContent} from "../api/page-content.api.ts";
import remarkBreaks from "remark-breaks";
import rehypeRaw from "rehype-raw";

export default function AboutView() {

  const {data: content, isLoading, isError} = useQuery({queryKey: ["about-me"], queryFn: fetchAboutMeContent});

  return (
    <main className={"container mx-auto my-10 text-white"}>
      <h1 className={"font-serif text-4xl mb-10"}>About Me</h1>

      {
        isLoading && <p className={"h-80"}>loading content...</p>
      }

      {
        isError && <p className={"h-80"}>failed to fetch content...</p>
      }

      <div className="grid lg:grid-cols-3">

        {content &&
            <Markdown remarkPlugins={[remarkBreaks]} rehypePlugins={[rehypeRaw]} className={"lg:col-span-2 flex flex-col gap-4 text-justify"}>
              {content}
            </Markdown>
        }

      </div>
    </main>
  )
}