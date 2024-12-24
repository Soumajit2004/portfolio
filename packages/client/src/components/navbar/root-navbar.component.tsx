import {motion} from "motion/react";
import {NavLink} from "react-router";
import {useState} from "react";

const routes: { name: string, to: string }[] = [
  {name: "home", to: "/"},
  {name: "about", to: "/about"},
  {name: "projects", to: "/projects"},
  {name: "contact", to: "/contact"},
]

export default function RootNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className={"bg-background text-white sticky top-0 z-20"}>
      <nav className={" container mx-auto py-6 flex justify-between"}>
        <p className={"font-bold"}>Soumajit Ghosh</p>

        <div className={"hidden lg:flex gap-4"}>
          {
            routes.map(({name, to}) => (
              <NavLink key={to} to={to} className={"mx-2 underline"}>{name}</NavLink>
            ))
          }
        </div>

        <div className="lg:hidden">
          <button onClick={() => setIsMobileMenuOpen((prevState) => !prevState)}>
            {isMobileMenuOpen ? "close" : "menu"}
          </button>
          {isMobileMenuOpen &&
              <motion.div initial={{opacity: 0,}}
                          animate={{
                            opacity: 1,
                            transition: {ease: ["easeIn", "easeOut"]}
                          }}
                          transition={{
                            duration: 0.4,
                            scale: {type: "tween", duration: 0.4},
                          }}
                          className={"container mx-auto absolute top-20 left-0 z-20 bg-gray-900 flex flex-col w-full"}
              >
                  <ul
                      className="l">
                    {
                      routes.map(({name, to}) => (
                        <>
                          <li className={"py-8 px-2"}>
                            <NavLink to={to}>{name}</NavLink>
                          </li>
                          <hr/>
                        </>

                      ))
                    }
                  </ul>
              </motion.div>
          }
        </div>
      </nav>
      <hr/>
    </div>

  );
}