import RootNavbar from "../components/navbar/root-navbar.component.tsx";
import {Outlet} from "react-router";

export default function RootLayout() {
  return (
    <main className={"font-mono max-w-full overflow-x-hidden"}>
      <RootNavbar/>

      <hr/>

      <Outlet/>
    </main>
  )
}