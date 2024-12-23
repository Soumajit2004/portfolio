/* eslint-disable react-hooks/exhaustive-deps */
import {fetchAllProjects} from "../../api/project.api.ts";
import {useInfiniteQuery} from "@tanstack/react-query";
import ProjectCard from "../../components/project/project-card.component.tsx";
import {useInView} from "react-intersection-observer";
import {useEffect} from "react";

export default function AllProjectsView() {
  const {ref, inView} = useInView()

  const {isFetching, isFetchingNextPage, data, fetchNextPage, hasNextPage} = useInfiniteQuery({
    queryKey: ['all-projects'],
    queryFn: ({pageParam}) => fetchAllProjects({pageNumber: pageParam}),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      return lastPage ? (lastPage.pagination.pageCount > lastPage.pagination.page ? lastPage.pagination.page + 1 : undefined) : 1;
    },
  });

  const allProjects = data ? data.pages.map((page) => page!.projects).flat() : [];

  useEffect(() => {
    if (inView) {
      fetchNextPage().then(() => "next page fetched");
    }
  }, [inView]);

  return (
    <main className={"bg-background text-white container mx-auto"}>
      <h1 className={"font-serif text-4xl my-10 sticky top-0"}>All Projects</h1>

      {
        (isFetching && !isFetchingNextPage) ? <p className={"h-80 text-center"}>loading projects...</p> :
          <div className="grid gap-8 grid-cols-2 lg:grid-cols-3 ">
            {
              data && allProjects.map((project) => (
                <ProjectCard project={project} key={project.documentId}/>
              ))
            }
          </div>
      }

      <div ref={ref} id={"infinite-scroll-observer"} className={"h-20 text-white text-sm w-full flex justify-center"}>
        {inView && hasNextPage && <p>loading more projects...</p>}
      </div>
    </main>
  );
}