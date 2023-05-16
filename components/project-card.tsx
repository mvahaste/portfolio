import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Project } from "@/lib/project";
import { ExternalLink } from "lucide-react";
import { JetBrains_Mono } from "next/font/google";
import Image from "next/image";

const jbmono = JetBrains_Mono({ subsets: ["latin"] });

const ProjectCard = ({ project }: { project: Project }) => {
	return (
		<div className="bg-card border drop-shadow rounded-lg w-full md:w-80 pb-2 pt-3 px-3 flex flex-col">
			<a href={project.image} target="_blank">
				<Image src={project.image} width={300} height={300} alt={project.title + "thumbnail"} className="rounded-lg border mb-1 aspect-[3/4] object-cover" />
			</a>
			<a href={project.link} target="_blank" className="scroll-m-20 text-xl font-semibold tracking-tight hover:underline">
				{project.title}
			</a>
			<p className="leading-7 [&:not(:first-child)]:mt-1 mb-1">{project.description}</p>
			<div className="grow flex justify-end gap-3 mt-1">
				{project.tags.map((tag) => (
					// bg-background/75 text-foreground/60 px-2 py-1 rounded-md text-sm font-medium
					<span key={tag} className={"rounded-full px-2 py-1 bg-muted text-xs " + jbmono.className}>
						{tag}
					</span>
				))}
			</div>
		</div>
	);
};

export default ProjectCard;
