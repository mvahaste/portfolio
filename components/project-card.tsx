import { Badge } from "@/components/ui/badge";
import { Project } from "@/lib/projects";
import { ExternalLink, Lock, Unlock } from "lucide-react";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import Image from "next/image";
import CustomTooltip from "./custom-tooltip";

const ProjectCard = ({ project }: { project: Project }) => {
	return (
		<div className="bg-card border drop-shadow rounded-lg w-full md:w-80 flex flex-col pb-7 z-30">
			<a href={project.image} target="_blank">
				<Image
					quality={100}
					src={project.image}
					width={300}
					height={300}
					alt={project.title + "thumbnail"}
					className="border-b rounded-tl-lg rounded-tr-lg aspect-square object-top object-cover w-full h-auto shadow-inner"
				/>
			</a>
			<div className="flex flex-col px-3 pb-3 pt-2">
				<a href={project.link} target="_blank" className="scroll-m-20 text-xl font-semibold group tracking-tight hover:underline text-card-foreground">
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
				<div className="w-6 h-6 absolute bottom-2.5 left-2.5 flex items-center justify-center group" title={`This project is ${project.public ? "public" : "private"}`}>
					{project.public ? <Unlock size={20} /> : <Lock size={20} />}
					<CustomTooltip css="absolute bottom-7">This project is {project.public ? "public" : "private"}</CustomTooltip>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
