export interface Films {
    id: bigint;
    title: string;
    description: string;
    image_thumbnail: string,
}

export interface GetFilmsResponse {
    Films: Films[];
    message: string;
}