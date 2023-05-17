import ProjectCard from "@/components/project-card";
import { TypographyH3, TypographyP } from "@/components/typography";
import { projects } from "@/lib/project";

export default function Projects() {
	return (
		<main>
			<div className="mb-6 flex flex-col md:items-center md:text-center">
				<TypographyH3>My projects</TypographyH3>
				<TypographyP prose>
					Here&apos;s a few of my &apos;better&apos; projects, or at least ones that I like more than the rest. Some are public and some are private, but I still felt like
					adding them here, even if you can&apos;t view the source since it&apos;s sensitive.
				</TypographyP>
				<TypographyP prose>Clicking on the thumbnail opens the full image in a new tab, clicking on the title opens the project source in a new tab.</TypographyP>
			</div>
			<div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{projects.map((project) => (
					<ProjectCard key={project.id} project={project} />
				))}
			</div>
		</main>
	);
}
