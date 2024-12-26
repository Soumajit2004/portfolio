import RootNavbar from "../components/navbar/root-navbar.component.tsx";
import {Outlet} from "react-router";
import RootFooter from "../components/footer/root-footer.component.tsx";

export default function RootLayout() {
  return (
    <main className={"relative font-mono w-full"}>
      <RootNavbar/>

      <Outlet/>

      <RootFooter/>
    </main>
  )
}