export interface Job {
    description: string;
    title: string;
    image: string;
    type: string;
    publication_date: string;
    id: number;
    location: string;
    level: string;
    tags: Array<string>;
    company: {
        id: number;
        short_name: string;
        name: string;
    }
}