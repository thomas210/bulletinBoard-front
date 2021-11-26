export interface Notice {
    id: number;
    title: string;
    description: string;
    publicationDate: Date;
    visualizationDate: Date;
}

export interface ResponseNotices {
    content: Notice[];
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
}

export interface RequestCreate {
    title: string;
    description: string;
}