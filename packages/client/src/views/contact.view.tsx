import {useForm, ValidationError} from "@formspree/react";
import {NavLink} from "react-router";

export default function ContactView() {
  const [state, handleSubmit] = useForm("meooqzlq");

  return (
    <div className={"container mx-auto text-white my-10 gap-10 flex flex-col"}>
      <h1 className={"font-serif text-4xl"}>Contact</h1>

      <div className="grid md:grid-cols-2 gap-8">

        {!state.succeeded ? <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          <input
            id="email"
            type="email"
            name="email"
            placeholder="your email"
            className={"bg-primary/50 p-2 rounded"}
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className={"text-red-500"}
          />
          <textarea
            id="message"
            name="message"
            placeholder={"your message"}
            rows={20}
            className={"bg-primary/50 p-2 rounded"}
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
            className={"text-red-500"}
          />
          <button type="submit" className={"bg-primary rounded py-4"} disabled={state.submitting}>
            {state.submitting ? "Submitting..." : "Submit"}
          </button>
        </form> : (
          <div className={"my-8"}>
            <p>Thanks for contacting! I will get back to you soon.</p>
          </div>
        )}

        <div className={"flex flex-col gap-8"}>
          <div className={"flex flex-col gap-4"}>
            <h3 className={"text-2xl font-serif"}>Social Links</h3>

            <p>github: <span><NavLink to={"https://github.com/Soumajit2004/"} className={"underline"}>Soumajit2004</NavLink></span></p>
            <p>linkedIn: <span><NavLink to={"https://www.linkedin.com/in/soumajit-ghosh"} className={"underline"}>in/soumajit-ghosh</NavLink></span></p>
            <p>twitter: <span><NavLink to={"https://twitter.com/soumojitghosh02"} className={"underline"}>@soumojitghosh02</NavLink></span></p>
            <p>instagram: <span><NavLink to={"https://www.instagram.com/soumajitghosh02/"} className={"underline"}>soumajitghosh02</NavLink></span></p>
          </div>

          <hr/>

          <div className={"flex flex-col gap-4"}>
            <h3 className={"text-2xl font-serif"}>Contact Info</h3>

            <p>email: soumojitghosh02@gmail.com</p>
            <p>ph no: +919073283887</p>
            <p>available hours: 9AM - 8PM</p>
            <p>address: Nalikul, Hooghly, West Bengal 712407</p>
          </div>
          </div>
        </div>
      </div>
      );
      }