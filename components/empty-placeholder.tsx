export function EmptyPlaceholder({ children }: { children: React.ReactNode }) {
	return <span className="font-medium opacity-30 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">{children}</span>;
}
