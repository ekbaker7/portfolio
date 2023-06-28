import { Project } from "@/data/projects";

function ProjectDescription({ project }: { project: Project }) {
  return (
    <div>
      <a href={project.url} target="_blank" rel="noreferrer">
        <h3 className="text-xl font-bold hover:underline cursor-pointer">
          {project.name}
        </h3>
      </a>
      <p>{project.description}</p>
      <span className="text-sm">{project.technologies.join(", ")}</span>
    </div>
  );
}

export default ProjectDescription;
