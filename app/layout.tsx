"use client";

import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/header";
import { ThemeProvider } from "next-themes";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

export const metadata = {
	title: "mvahaste.dev",
	description: "Mikk Vahaste's portfolio website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<title>{metadata.title}</title>
			<body className={`${inter.variable} font-sans min-h-screen antialiased pb-16 bg-background transition-colors duration-75`}>
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
