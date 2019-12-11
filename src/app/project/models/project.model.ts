export interface Project {
    id: number;
    title: string;
    img: string;
    tags: string;
    sub: {
        projects: Array<{
            title: string;
            description: string;
            present: string;
            img: string[];
            ico: {};
            tags: string;
    }>
    };
}


