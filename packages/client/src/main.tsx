import "./index.css"

import ReactDOM from "react-dom/client";
import {BrowserRouter, Route, Routes} from "react-router";

import RootLayout from "./layouts/root.layout.tsx";

import Home from "./views/home/home.route.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const root = document.getElementById("root");

const queryClient = new QueryClient();

ReactDOM.createRoot(root!).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout/>}>

          <Route index element={<Home/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);