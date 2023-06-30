import ProjectList from "@/components/ProjectList";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen w-screen md:p-24 md:flex flex-auto flex-row justify-center">
      <div className="lg:w-5/12 md:w-full h-full flex-grow p-24 md:p-0">
        <div>
          <h1 className="text-4xl font-bold text-left">
            Hello, I&apos;m Emmett.
          </h1>
        </div>
        <div className="mt-20">
          <Image
            src={"/me.jpg"}
            alt="Emmett Baker profile picture"
            width={400}
            height={400}
            className="rounded-full"
          />
        </div>
        <div>
          <p className="mt-20 text-2xl font-semibold text-left">
            I am a Software Engineer from Baltimore, MD.
          </p>
          <p>
            <a
              href="https://crankybun.ddns.net/index.php/s/3qCBY3ZDpNeBKq3"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:font-bold"
            >
              My Resume
            </a>
          </p>
          <p>
            <a
              href="https://www.linkedin.com/in/emmett-baker-37093818a/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:font-bold"
            >
              My LinkedIn
            </a>
          </p>
          <p>
            <a
              href="https://github.com/ekbaker7/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:font-bold"
            >
              My GitHub
            </a>
          </p>
        </div>
      </div>
      <div className="items-center justify-center min-h-full relative lg:w-2/12">
        <div className="h-full border-l border-black absolute left-[50%]"></div>
      </div>
      <div className="text-left w-full lg:w-5/12 ">
        <h2 className="text-3xl mt-10 md:mt-0 ml-5 md:ml-0">
          Some of my projects...
        </h2>
        <ProjectList />
      </div>
    </main>
  );
}
