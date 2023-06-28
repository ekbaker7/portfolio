import { projects } from "@/data/projects";
import Image from "next/image";
import ProjectImage from "./ProjectImage";
import ProjectDescription from "./ProjectDescription";

function ProjectList() {
  return (
    <div className="h-[calc(100vh-25vh)] overflow-auto">
      <ul>
        {projects.map((project, index) => (
          <li key={project.id} className="">
            <div className={index % 2 === 1 ? 'grid grid-cols-2 bg-gray-300 py-10 px-5' : 'grid grid-cols-2 py-10 px-5'}>
              {index % 2 === 1 ? (
                <>
                  <ProjectDescription project={project} />
                  <div className="flex justify-end">
                    <ProjectImage project={project} />
                  </div>
                </>
              ) : (
                <>
                  <div className="relative right-0">
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
