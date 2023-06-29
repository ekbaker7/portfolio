import { Project } from "@/data/projects";
import Image from "next/image";

function ProjectImage({ project }: { project: Project }) {
  return (
    <div>
      {project.url ? (
        <a href={project.url} target="_blank" rel="noreferrer">
          <Image
            src={project.image}
            alt={project.name}
            width={300}
            height={300}
          />
        </a>
      ) : (
        <Image
          src={project.image}
          alt={project.name}
          width={300}
          height={300}
        />
      )}
    </div>
  );
}

export default ProjectImage;
