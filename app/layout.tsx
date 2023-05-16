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
				<Header />
				<div className="lg:pt-6 lg:pb-10 lg:max-w-[86rem] px-6 sm:max-w-full mx-auto">{children}</div>
			</body>
		</html>
	);
}

function setTheme(theme: string): void {
	console.log(theme);
}
