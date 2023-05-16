"use client";

import { Laptop, Moon, Sun } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";

export default function header() {
	return (
		<div className="mx-auto w-full flex flex-row items-center border-b-[1px] lg:px-72 py-2 h-14 fixed bg-white bg-opacity-75 backdrop-blur-md">
			<h1 className="font-bold">mvahaste.dev</h1>
			<div className="grow flex justify-between">
				<div className="flex items-center justify-center gap-8 ml-8 text-sm">
					<Link href="/projects">Projects</Link>
					<Link href="/about">About</Link>
					<Link href="/contact">Contact</Link>
				</div>
				<div>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant="ghost">Open</Button>
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
	);
}

function setTheme(theme: string): void {
	console.log(theme);
}
