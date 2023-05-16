// Project interface
export interface Project {
    title: string;
    description: string;
    image: string;
    link: string;
    tags: string[];
}

// Project data
export const projects: Project[] = [
    {
        title: "Folt Food",
        description: "A visual-only clone of the Bolt Food app, all of the five main screens, made with Flutter.",
        image: "/projects/folt-food.jpg",
        link: "https://github.com/mvahaste/folt-food",
        tags: ["Flutter", "Dart"]
    },
    {
        title: "KFC discount codes",
        // Discordi bot, mis laeb KFC_Est Facebooki lehelt sooduskoodid ja postitab need Discordi kanalisse iga teisipäev kell 8.
        description: "A Discord bot that gets the latest discount from the KFC_Est Facebook page and sends it to a Discord channel every Tuesday at 8.",
        image: "/projects/kfc-sooduskoodid.jpg",
        link: "https://github.com/mvahaste/kfc-codes-bot",
        tags: ["Python", "API/Discord"]
    }
    // ,
    // {
    //     title: "Lorem Ipsum",
    //     description: "Sint enim Lorem officia Lorem amet consequat cupidatat. Nisi cillum mollit reprehenderit consequat elit.",
    //     image: "/placeholder.webp",
    //     link: "https://google.com",
    //     tags: ["Dolor", "Sit", "Amet"]
    // },
    // {
    //     title: "Velit reprehenderit velit",
    //     description: "Amet dolor incididunt qui esse non magna occaecat tempor veniam ex in in ullamco consectetur. Eiusmod consectetur veniam aute aliquip.",
    //     image: "/placeholder.webp",
    //     link: "https://google.com",
    //     tags: ["Lorem", "Ipsum"]
    // }
];