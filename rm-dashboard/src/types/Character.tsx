export type Character = {
    id: number;
    name: string;
    image: string;
    status: string;
    species: string;
    gender: string;
    originName: string;
    location: {
        name: string;
        url: string;
    };
};