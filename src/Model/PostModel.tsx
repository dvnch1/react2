export interface PostModel {
    id: number,
    title: string
    userId: number,
    tags: string[],
    reactions: number,
    body: string
}