import "./index.css"

import ReactDOM from "react-dom/client";
import {BrowserRouter, Route, Routes} from "react-router";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

import RootLayout from "./layouts/root.layout.tsx";

import HomeView from "./views/home/home.view.tsx";
import ProjectView from "./views/project.view.tsx";

const root = document.getElementById("root");

const queryClient = new QueryClient();

ReactDOM.createRoot(root!).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout/>}>

          <Route index element={<HomeView/>}/>
          <Route path={'/projects'} element={<ProjectView/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);