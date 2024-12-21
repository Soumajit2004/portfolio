import "./index.css"

import ReactDOM from "react-dom/client";
import {BrowserRouter, Route, Routes} from "react-router";

import RootLayout from "./layouts/root.layout.tsx";

import Home from "./routes/home.route.tsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<RootLayout/>}>

        <Route index element={<Home/>}/>

      </Route>
    </Routes>
  </BrowserRouter>
);