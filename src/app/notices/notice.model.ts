export interface Notice {
    id: number;
    title: string;
    description: string;
    publicationDate: Date;
    visualizationDate: Date;
}

// export interface Sort {
//     empty: boolean;
//     sorted: boolean;
//     unsorted: boolean;
// }

// export interface Pageable {
//     sort: Sort;
//     offset: number;
//     pageNumber: number;
//     pageSize: number;
//     unpaged: boolean;
//     paged: boolean;
// }

// export interface Sort2 {
//     empty: boolean;
//     sorted: boolean;
//     unsorted: boolean;
// }

export interface ResponseNotices {
    content: Notice[];
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
}