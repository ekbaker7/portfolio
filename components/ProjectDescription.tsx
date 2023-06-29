import { Project } from "@/data/projects";

function ProjectDescription({ project }: { project: Project }) {
  return (
    <div>
      {project.url ? (
        <a href={project.url} target="_blank" rel="noreferrer">
          <h3 className="text-xl font-bold hover:underline cursor-pointer">
            {project.name}
          </h3>
        </a>
      ) : (
        <h3 className="text-xl font-bold">{project.name}</h3>
      )}
      <p>{project.description}</p>
      <span className="text-sm italic">{project.technologies.join(", ")}</span>
    </div>
  );
}

export default ProjectDescription;
