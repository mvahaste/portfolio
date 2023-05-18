function emptyPlaceholder(text: string = "There's nothing here (yet :D)") {
	return <p className="font-medium opacity-25 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">{text}</p>;
}

export default emptyPlaceholder;
