import ProjectCard from "@/components/project-card";
import { projects } from "@/lib/project";

export default function Projects() {
	return (
		<main>
			<div className="grid gap-4">
				{projects.map((project) => (
					<ProjectCard key={project.title} project={project} />
				))}
			</div>
		</main>
	);
}
