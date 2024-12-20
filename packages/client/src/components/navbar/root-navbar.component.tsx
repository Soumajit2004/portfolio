import {NavLink} from "react-router";

export default function RootNavbar() {
  return (
    <nav className={"bg-background text-white container mx-auto py-5 flex justify-between"}>
      <p className={"font-bold"}>Soumajit Ghosh</p>

      <div className={"flex gap-4"}>
        <NavLink to={"/"} className={"mx-2"}>home</NavLink>
        <NavLink to={"/about"} className={"mx-2"}>about</NavLink>
        <NavLink to={"/projects"} className={"mx-2"}>projects</NavLink>
        <NavLink to={"/contact"} className={"mx-2"}>contact</NavLink>
      </div>


    </nav>
  );
}