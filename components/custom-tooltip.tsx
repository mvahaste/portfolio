export function CustomTooltip({ children, css }: { children: React.ReactNode; css: string }) {
	return (
		<span
			className={`${css} invisible group-hover:visible z-50 w-fit whitespace-nowrap overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md group-hover:animate-in group-hover:fade-in-50 group-hover:slide-in-from-bottom-1`}
		>
			{children}
		</span>
	);
}

export default CustomTooltip;
