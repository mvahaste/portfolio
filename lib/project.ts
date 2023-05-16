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
        title: "KFC sooduskoodid",
        description: "Discordi bot, mis laeb KFC_Est Facebooki lehelt sooduskoodid ja postitab need Discordi kanalisse iga teisipäev kell 8.",
        image: "/projects/kfc-sooduskoodid.jpg",
        link: "https://github.com/mvahaste/kfc-codes-bot",
        tags: ["Python", "API/Discord"]
    },
    {
        title: "Folt Food",
        description: "Bolt Food äppi visuaalne kloon loodud Flutteris.",
        image: "/projects/folt-food.jpg",
        link: "https://github.com/mvahaste/folt-food",
        tags: ["Flutter", "Dart"]
    }
];