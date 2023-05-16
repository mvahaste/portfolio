"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Laptop, Moon, Sun } from "lucide-react";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
// const roboto = Roboto({
// 	weight: "400",
// 	subsets: ["latin"],
// });

export const metadata = {
	title: "mvahaste.dev",
	description: "Portfolio of Mikk Vahaste",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	const bodyClasses = "min-h-screen antialiased vsc-initialized";
	return (
		<html lang="en">
			<title>{metadata.title}</title>
			<body className={(inter.className, bodyClasses)}>
				{/* Header */}
				<header className="mx-auto w-full flex flex-row items-center border-b-[1px] py-2 h-14 sticky top-0 z-40 bg-white bg-opacity-75 backdrop-blur-md shadow-sm">
					<div className="flex container max-w-[85rem] px-4 mx-auto items-center">
						<div className="flex gap-2">
							<Avatar className="w-6 h-6">
								<AvatarImage src="https://github.com/mvahaste.png?size=40" alt="@mvahaste" />
								<AvatarFallback>MV</AvatarFallback>
							</Avatar>
							<h1 className="font-bold">mvahaste.dev</h1>
						</div>
						<div className="grow flex justify-between">
							<div className="flex items-center justify-center gap-8 ml-8 text-sm font-medium">
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
							</div>
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
				{/* Content */}
				<div className="lg:pt-6 lg:pb-10 lg:max-w-[86rem] px-6 sm:max-w-full mx-auto">{children}</div>
			</body>
		</html>
	);
}

function setTheme(theme: string): void {
	console.log(theme);
}
