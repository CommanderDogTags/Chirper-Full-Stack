export interface IChirp {
    id: number;
    userid: number;
    text: string;
    author: string;
    _created: Date;
}

export interface IMentions {
    usermentionid: number;
    chirpid: number;
}