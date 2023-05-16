import { Badge } from "@/components/ui/badge";
import { Project } from "@/lib/project";
import { ExternalLink } from "lucide-react";

import Image from "next/image";

const ProjectCard = ({ project }: { project: Project }) => {
	return (
		<div className="bg-card border drop-shadow rounded-lg w-full md:w-80 flex flex-col pb-7">
			<a href={project.image} target="_blank">
				<Image
					src={project.image}
					width={300}
					height={300}
					alt={project.title + "thumbnail"}
					title="Open full image in new tab"
					className="border-b rounded-tl-lg rounded-tr-lg aspect-square object-cover w-full h-auto"
				/>
			</a>
			<div className="flex flex-col px-3 pb-3 pt-2">
				<a
					href={project.link}
					target="_blank"
					title="Open project source in new tab"
					className="scroll-m-20 text-xl font-semibold group tracking-tight hover:underline text-card-foreground"
				>
					{project.title}
					<span className="invisible group-hover:visible">
						<ExternalLink className="inline-block ml-1 h-5 w-5 mb-1" />
					</span>
				</a>
				<p className="leading-7 [&:not(:first-child)]:mt-0.5 mb-1 text-card-foreground">{project.description}</p>
				<div className="flex justify-end gap-3 absolute bottom-3 right-3">
					{project.tags.map((tag) => (
						<Badge key={tag} variant="outline">
							{tag}
						</Badge>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
