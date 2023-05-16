// Project interface
export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    link: string;
    tags: string[];
}

// Project data
export const projects: Project[] = [
    {
        id: 1,
        title: "Folt Food",
        description: "A visual-only clone of the Bolt Food app, all of the five main screens, made with Flutter.",
        image: "/projects/folt-food.jpg",
        link: "https://github.com/mvahaste/folt-food",
        tags: ["Flutter", "Dart"]
    },
    {
        id: 2,
        title: "KFC discount codes",
        description: "A Discord bot that gets the latest discount from the KFC_Est Facebook page and sends it to a Discord channel every Tuesday at 8.",
        image: "/projects/kfc-sooduskoodid.jpg",
        link: "https://github.com/mvahaste/kfc-codes-bot",
        tags: ["Python", "API/Discord"]
    },
    {
        id: 3,
        title: "Colors website",
        description: "A website I made for a class project. It has a searchable grid of colors and another where you can change the grid size and draw.",
        image: "/projects/colors-website.png",
        link: "https://github.com/mvahaste/colors-website",
        tags: ["HTML", "CSS", "JavaScript"]
    },
    {
        id: 4,
        title: "Notepad",
        description: "A basic website for quickly taking some notes. Sometimes I need to write something down while playing games and I can't alt-tab, so I made this to use in the Steam browser.",
        image: "/projects/notepad.jpg",
        link: "https://github.com/mvahaste/notepad",
        tags: ["HTML", "CSS", "JavaScript"]
    }
];