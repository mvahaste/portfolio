"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Laptop, Moon, Sun } from "lucide-react";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/router";
import "./globals.css";

import Header from "@/components/header";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });
// const roboto = Roboto({
// 	weight: "400",
// 	subsets: ["latin"],
// });

export const metadata = {
	title: "mvahaste.dev",
	description: "Portfolio of Mikk Vahaste",
};

// https://dev.to/chinmaymhatre/implementing-dark-mode-in-nextjs-with-tailwind-css-and-next-themes-a4e

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<title>{metadata.title}</title>

			<body className={(inter.className, "min-h-screen antialiased pb-6 bg-background")}>
				<ThemeProvider attribute="class" defaultTheme="system">
					<Header />
					<div className="lg:max-w-[85rem] sm:max-w-full mx-auto px-4">{children}</div>
				</ThemeProvider>
			</body>
		</html>
	);
}

function setTheme(theme: string): void {
	console.log(theme);
}
