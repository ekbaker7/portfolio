import ProjectList from "@/components/ProjectList";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen w-screen p-24 md:flex flex-auto flex-row justify-center">
      <div className="lg:w-5/12 md:w-full h-full flex-grow">
        <div>
          <h1 className="text-4xl font-bold text-left">Hello, I&apos;m Emmett.</h1>
        </div>
        <div className="mt-20">
          <Image
            src={"/me.jpg"}
            alt="Emmett Baker profile picture"
            width={475}
            height={475}
            className="rounded-full"
          />
        </div>
        <div>
          <p className="mt-20 text-2xl font-semibold text-left">
            I am a Software Engineer from Baltimore, MD.
          </p>
            <a
              href="https://crankybun.ddns.net/index.php/s/3qCBY3ZDpNeBKq3"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              My Resume.
            </a>
        </div>
      </div>
      <div className="items-center justify-center min-h-full relative lg:w-2/12">
        <div className="h-full border-l border-black absolute left-[50%]"></div>
      </div>
      <div className="text-left lg:w-5/12 md:w-full">
        <h2 className="text-3xl sm:mt-10 md:mt-0">Some of my projects...</h2>
        <ProjectList />
      </div>
    </main>
  );
}
