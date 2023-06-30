"use client";

import { projects } from "@/data/projects";
import Image from "next/image";
import ProjectImage from "./ProjectImage";
import ProjectDescription from "./ProjectDescription";
import useMediaQuery from '@mui/material/useMediaQuery';

function ProjectList() {

  let isTabletOrPhone = useMediaQuery("(max-width:768px)");

  return (
    <div className="md:h-[calc(100vh-25vh)] overflow-auto">
      <ul>
        {projects.map((project, index) => (
          <li key={project.id}>
            <div className={index % 2 === 1 ? 'md:grid md:grid-cols-2 bg-gray-300 py-10 px-5 text-black' : 'md:grid md:grid-cols-2 py-10 px-5'}>
              {index % 2 === 1 && !isTabletOrPhone ? (
                <>
                  <ProjectDescription project={project} />
                  <div className="flex justify-end pl-5">
                    <ProjectImage project={project} />
                  </div>
                </>
              ) : (
                <>
                  <div className={isTabletOrPhone ? "flex justify-center w-full mb-10" : "relative right-0 pr-5"}>
                    <ProjectImage project={project} />
                  </div>
                  <ProjectDescription project={project} />
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectList;
