"use client";

import { Github, Laptop, Moon, Sun, Twitter } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";

const Header = () => {
	const path = usePathname();

	const { resolvedTheme, setTheme } = useTheme();

	return (
		<header className="sticky z-40 top-0 left-0 right-0 mb-6 md:mb-8 px-4 h-14 border-b shadow-sm bg-background/75 backdrop-blur-xl">
			<div className="max-w-[83.5rem] mx-auto grow h-14 flex justify-between items-center">
				<div className="flex">
					<div className="container px-0 flex items-center gap-2 mr-5 md:mr-6">
						<Avatar className="w-6 h-6 inline">
							<AvatarImage src="https://github.com/mvahaste.png" alt="@mvahaste" />
							<AvatarFallback className="text-xs">MV</AvatarFallback>
						</Avatar>
						<span className="hidden font-bold sm:inline-block">Mikk Vahaste</span>
					</div>
					<nav className="flex items-center space-x-4 md:space-x-6 text-sm font-medium pt-0.5">
						<Link href="/" className={"transition-colors hover:text-foreground/80 text-foreground/60" + (path === "/" ? "text-foreground" : "")}>
							Home
						</Link>
						<Link href="/projects" className={"transition-colors hover:text-foreground/80 text-foreground/60" + (path === "/projects" ? "text-foreground" : "")}>
							Projects
						</Link>
						<Link href="/contact" className={"transition-colors hover:text-foreground/80 text-foreground/60" + (path === "/contact" ? "text-foreground" : "")}>
							Contact
						</Link>
					</nav>
				</div>
				<div className="flex gap-3">
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant="ghost" className="flex items-center gap-2 w-8 h-8 p-0">
								{resolvedTheme === "dark" ? <Moon size={22} /> : <Sun size={22} />}
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent>
							<DropdownMenuItem onClick={() => setTheme("light")}>
								<Sun className="mr-2 h-4 w-4" />
								Light
							</DropdownMenuItem>
							<DropdownMenuItem onClick={() => setTheme("dark")}>
								<Moon className="mr-2 h-4 w-4" />
								Dark
							</DropdownMenuItem>
							<DropdownMenuItem onClick={() => setTheme("system")}>
								<Laptop className="mr-2 h-4 w-4" />
								System
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</div>
		</header>
	);
};

export default Header;
