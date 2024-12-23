import RootNavbar from "../components/navbar/root-navbar.component.tsx";
import {Outlet} from "react-router";
import RootFooter from "../components/footer/root-footer.component.tsx";

export default function RootLayout() {
  return (
    <main className={"font-mono max-w-full overflow-x-hidden"}>
      <>
        <RootNavbar/>
        <hr/>
      </>

      <Outlet/>

      <RootFooter/>
    </main>
  )
}