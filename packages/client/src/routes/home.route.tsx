// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import Donut from 'react-spinning-donut';

export default function Home() {
  return (
    <section
      className={"relative h-[90vh] max-h-[90vh] overflow-hidden mx-auto bg-background text-white py-4"}>

      <div className={"absolute left-20 top-1/4 flex flex-col gap-4 max-w-[50%]"}>
        <h1 className={"text-4xl font-serif font-bold leading-relaxed"}>
          Weaving dreams into code,<br/>
          I craft the web’s silent poetry.
        </h1>

        <p className={"text-white/50 text-md text-justify"}>
          I’m a web developer—fluent in React, Node.js and the art of Googling errors faster than they appear.
        </p>
      </div>

      <div className="absolute bottom-0 right-32">
        <Donut color={"white"} scaleX={3} scaleY={1.5} fontSize={8}/>
      </div>
    </section>
  );
}