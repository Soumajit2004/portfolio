import {NavLink} from "react-router";

export default function RootFooter() {
  return (
    <footer className={"bg-secondary"}>
      <div className="container mx-auto py-10 md:py-16 lg:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        <div id="personal-info" className={"flex flex-col gap-4 text-white md:col-span-2 lg:col-span-1 col-span-1"}>
          <h3 className={"font-serif text-2xl"}>Soumajit Ghosh</h3>
          <p className={"text-sm text-justify opacity-50"}>
            {"first - year college student from India and a skilled full-stack developer. With a passion for creating dynamic" +
              "and efficient software solutions, Soumajit specializes in both frontend and backend development, showcasing" +
              "expertise in various technologies and frameworks.".toLowerCase()}
          </p>
        </div>

        <div id="empty-slot" className={"hidden lg:block"}>

        </div>

        <div id="contact-info" className={"flex flex-col gap-4 text-white "}>
          <h3 className={"text-xl"}>contact</h3>
          <p className={"text-sm opacity-50"}> +91 9073283887</p>
          <p className={"text-sm opacity-50"}> soumojitghosh02@gmail.com</p>
          <p className={"text-sm opacity-50"}> hooghly, kolkata, india</p>
        </div>

        <div id="socal-links" className={"flex flex-col gap-4 text-white "}>
          <h3 className={"text-xl"}>social links</h3>
          <NavLink to={"https://www.linkedin.com/in/soumajit-ghosh/"} className={"text-sm opacity-50 underline"}>linked in</NavLink>
          <NavLink to={"https://github.com/Soumajit2004"} className={"text-sm opacity-50 underline"}>github</NavLink>
          <NavLink to={"https://www.instagram.com/soumajitghosh02"} className={"text-sm opacity-50 underline"}>instagram</NavLink>
        </div>


      </div>
    </footer>
  )
}