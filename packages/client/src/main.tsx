import "./index.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";

import ReactDOM from "react-dom/client";
import {BrowserRouter, Route, Routes} from "react-router";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

import RootLayout from "./layouts/root.layout.tsx";

import HomeView from "./views/home/home.view.tsx";
import AllProjectsView from "./views/project/all-projects.view.tsx";
import ProjectView from "./views/project/project.view.tsx";
import ContactView from "./views/contact.view.tsx";

const root = document.getElementById("root");

const queryClient = new QueryClient();

ReactDOM.createRoot(root!).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout/>}>

          <Route index element={<HomeView/>}/>
          <Route path={'/projects'} element={<AllProjectsView/>}/>
          <Route path={'/projects/:projectSlug'} element={<ProjectView/>}/>
          <Route path={'/contact'} element={<ContactView/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);