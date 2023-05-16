"use client";

import { Laptop, Moon, Sun } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";

const Header = () => {
	return (
		<header className="mx-auto w-full flex flex-row items-center border-b-[1px] py-2 h-14 sticky top-0 z-40 bg-white bg-opacity-75 backdrop-blur-md shadow-sm">
			<div className="flex container max-w-[85rem] px-4 mx-auto items-center">
				<div className="flex gap-2 items-center">
					<Avatar className="w-6 h-6">
						<AvatarImage src="https://github.com/mvahaste.png?size=40" alt="@mvahaste" />
						<AvatarFallback>MV</AvatarFallback>
					</Avatar>
					<span className="hidden font-bold sm:inline-block">mvahaste.dev</span>
				</div>
				<div className="grow flex justify-between">
					<nav className="flex items-center justify-center gap-8 ml-8 text-sm font-medium">
						<Link href="/" className="transition-colors hover:text-foreground/80 text-foreground/60">
							Home
						</Link>
						<Link href="/projects" className="transition-colors hover:text-foreground/80 text-foreground/60">
							Projects
						</Link>
						<Link href="/about" className="transition-colors hover:text-foreground/80 text-foreground/60">
							About
						</Link>
						<Link href="/contact" className="transition-colors hover:text-foreground/80 text-foreground/60">
							Contact
						</Link>
					</nav>
					<div>
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button variant="ghost">Theme</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent>
								<DropdownMenuItem onClick={() => setTheme("light")}>
									<Sun className="mr-2 h-4 w-4" />
									Light
								</DropdownMenuItem>
								<DropdownMenuItem onClick={() => setTheme("dark")}>
									<Moon className="mr-2 h-4 w-4" /> Dark
								</DropdownMenuItem>
								<DropdownMenuItem onClick={() => setTheme("system")}>
									<Laptop className="mr-2 h-4 w-4" />
									System
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</div>
				</div>
			</div>
		</header>
	);
};

function setTheme(theme: string): void {
	console.log(theme);
}

export default Header;
