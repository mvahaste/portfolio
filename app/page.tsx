"use client";

import { TypographyH1, TypographyH2, TypographyH3, TypographyP, TypographySmall } from "@/components/typography";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { AvatarImage } from "@radix-ui/react-avatar";
import { CalendarDays } from "lucide-react";

export default function Home() {
	return (
		<main className="w-full md:w-[65ch]  mx-auto">
			<TypographyH1>Welcome to My Portfolio</TypographyH1>
			<TypographyP prose>
				Hello and welcome to my portfolio! I&apos;m excited to have you here. As a university student, I am eager to showcase my skills, knowledge, and enthusiasm for software
				development. This website serves as a platform to share my journey, projects, and aspirations with you.
			</TypographyP>
			<br />
			<TypographyH2>About Me</TypographyH2>
			<TypographyP prose>
				Allow me to introduce myself. I&apos;m Mikk, a passionate and dedicated student currently pursuing my degree at the{" "}
				<HoverCard>
					<HoverCardTrigger asChild>
						<a href="https://ut.ee/" target="_blank" className="underline-offset-4 hover:underline text-primary font-medium">
							University of Tartu
						</a>
					</HoverCardTrigger>
					<HoverCardContent className="w-80">
						<div className="flex justify-between space-x-4">
							<Avatar>
								<AvatarImage src="/images/ut.png" />
								<AvatarFallback>UT</AvatarFallback>
							</Avatar>
							<div className="space-y-1">
								<h4 className="text-sm font-semibold">University of Tartu</h4>
								<p className="text-sm">
									The University of Tartu is the leading university in the Baltics, the only one in the region to rank in the top 1.2% of world&apos;s universities.
								</p>
								<div className="flex items-center pt-2">
									<CalendarDays className="mr-2 h-4 w-4 opacity-70" /> <span className="text-xs text-muted-foreground">Started September 2022</span>
								</div>
							</div>
						</div>
					</HoverCardContent>
				</HoverCard>
				. While I may not have extensive professional experience just yet, I am committed to honing my skills and gaining practical knowledge through my studies.
			</TypographyP>
			<br />
			<TypographyH3>Areas of Interest</TypographyH3>
			<TypographyP prose>
				During my time at the university, and even before, I have developed a keen interest in software development, mainly web development at the moment, as it&apos;s the
				easiest for me to get out there. I am fascinated by the possibilities and potential of the field, and I actively seek opportunities to expand my understanding and
				expertise in this domain.
			</TypographyP>
			<br />
			<TypographyH3>Projects and Achievements</TypographyH3>
			<TypographyP prose>
				Although my professional experience may be limited, I have undertaken various projects and achieved significant milestones throughout my journey. I have taken on many
				projects and class assignments that have helped me develop my skills and still continue to do so actively.
			</TypographyP>
			<TypographyP prose>
				As an ambitious learner, I continuously challenge myself to push boundaries and explore new horizons. I strongly believe in the power of personal growth and strive to
				make the most of my university education to prepare myself for future opportunities.
			</TypographyP>
			<br />
			<TypographyH3>Future Goals</TypographyH3>
			<TypographyP prose>
				Looking ahead, my primary goal is to leverage my academic foundation and combine it with real-world experiences to create something that will make a meaningful impact
				in the world. I am excited to embark on a career journey that allows me to apply my knowledge, contribute to innovative projects, and collaborate with industry
				professionals.
			</TypographyP>
			<br />
			<TypographyH2>Let&apos;s Connect</TypographyH2>
			<TypographyP prose>
				I am always open to connecting with individuals who share similar interests or have valuable insights to offer. If you would like to discuss potential collaborations,
				share advice, or simply have a conversation, please feel free to reach out. You can find my contact information on the Contact page of this website.
			</TypographyP>
			<TypographyP prose>
				Thank you for visiting my portfolio. I appreciate your interest in my academic pursuits and the potential they hold. Together, let&apos;s embrace the spirit of learning
				and discover the endless possibilities that lie ahead.
			</TypographyP>
			<div className="flex justify-end w-full mt-2">
				<TypographySmall>- Mikk Vahaste</TypographySmall>
			</div>
		</main>
	);
}
