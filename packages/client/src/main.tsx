import "./index.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";

import React, {Suspense} from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Route, Routes} from "react-router";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

import RootLayout from "./layouts/root.layout.tsx";

const root = document.getElementById("root");

const queryClient = new QueryClient();

// eslint-disable-next-line react-refresh/only-export-components
const HomeViewLazy = React.lazy(() => import("./views/home/home.view.tsx"));
// eslint-disable-next-line react-refresh/only-export-components
const AllProjectsViewLazy = React.lazy(() => import("./views/project/all-projects.view.tsx"));
// eslint-disable-next-line react-refresh/only-export-components
const ProjectViewLazy = React.lazy(() => import("./views/project/project.view.tsx"));
// eslint-disable-next-line react-refresh/only-export-components
const ContactViewLazy = React.lazy(() => import("./views/contact.view.tsx"));
// eslint-disable-next-line react-refresh/only-export-components
const AboutViewLazy = React.lazy(() => import("./views/about.view.tsx"));

ReactDOM.createRoot(root!).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Suspense fallback={<p className={"text-white bg-background h-screen flex justify-center items-center"}>loading
        page...</p>}>
        <Routes>

          <Route path="/" element={<RootLayout/>}>

            <Route index element={<HomeViewLazy/>}/>
            <Route path={'/projects'} element={<AllProjectsViewLazy/>}/>
            <Route path={'/projects/:projectSlug'} element={<ProjectViewLazy/>}/>
            <Route path={'/contact'} element={<ContactViewLazy/>}/>
            <Route path={'/about'} element={<AboutViewLazy/>}/>

          </Route>

        </Routes>
      </Suspense>
    </BrowserRouter>
  </QueryClientProvider>
);