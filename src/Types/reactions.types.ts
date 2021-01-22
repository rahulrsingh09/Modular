export interface IReaction{
    id: number;
    name:string;
    emoji: string;
}

export interface IReactions{
    reactions: Array<IReaction>
}