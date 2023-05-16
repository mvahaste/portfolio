import ProjectCard from "@/components/project-card";
import { projects } from "@/lib/project";

export default function Projects() {
	return (
		<main>
			<div className="mb-6 flex flex-col md:items-center md:text-center">
				<h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">My projects</h3>
				<p className="leading-7 [&:not(:first-child)]:mt-6 max-w-prose">
					Here&apos;s a few of my &apos;better&apos; projects, or at least ones that I like more than the rest. Some are public and some are private, but I still felt like
					adding them here, even if you can&apos;t view the source since it&apos;s sensitive.
				</p>
				<p className="leading-7 [&:not(:first-child)]:mt-6 max-w-prose">
					Clicking on the thumbnail opens the full image in a new tab, clicking on the title opens the project source in a new tab.
				</p>
			</div>
			<div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{projects.map((project) => (
					<ProjectCard key={project.id} project={project} />
				))}
			</div>
		</main>
	);
}
