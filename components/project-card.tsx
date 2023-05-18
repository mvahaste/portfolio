import { Badge } from "@/components/ui/badge";
import { Project } from "@/lib/projects";
import { ExternalLink, Lock, Unlock } from "lucide-react";
import Image from "next/image";
import CustomTooltip from "./custom-tooltip";

const ProjectCard = async ({ project }: { project: Project }) => {
	var projectPublic = await ProjectPublic(project.link);

	return (
		<div className="bg-card border drop-shadow rounded-lg flex flex-col pb-7 z-30">
			<a href={project.image} target="_blank">
				<Image
					quality={100}
					src={project.image}
					width={512}
					height={512}
					alt={project.title + "thumbnail"}
					className="border-b rounded-tl-lg rounded-tr-lg aspect-[6/5] object-top object-cover w-full h-auto shadow-inner"
				/>
			</a>
			<div className="flex flex-col px-3 pb-3 pt-2">
				<a href={project.link} target="_blank" className="scroll-m-20 text-lg font-semibold group tracking-tight hover:underline text-card-foreground">
					{project.title}
					<span className="invisible group-hover:visible">
						<ExternalLink className="inline-block ml-1 h-5 w-5 mb-1" />
					</span>
				</a>
				<p className="leading-7 [&:not(:first-child)]:mt-0.5 mb-1 text-card-foreground text-sm">{project.description}</p>
				<div className="flex justify-end gap-3 absolute bottom-3 right-3">
					{project.tags.map((tag) => (
						<Badge key={tag} variant="outline">
							{tag}
						</Badge>
					))}
				</div>
				<div className="w-6 h-6 absolute bottom-2.5 left-2.5 flex items-center justify-center group">
					{projectPublic ? <Unlock size={20} /> : <Lock size={20} />}
					<CustomTooltip css="absolute bottom-7">This project is {projectPublic ? "public" : "private"}</CustomTooltip>
				</div>
			</div>
		</div>
	);
};

async function ProjectPublic(link: string): Promise<Boolean> {
	return await fetch(link, { cache: "no-store" }).then((res) => (res.status == 200 ? true : false));
}

export default ProjectCard;
