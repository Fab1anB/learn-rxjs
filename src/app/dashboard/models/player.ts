import { PlayerService } from "../services/player.service";

export interface Player {
    firstname: string;
    lastname: string;
    dateOfBirth: Date;
}


export type PlayerViewModel = Omit<Player, 'dateOfBirth'> & {
    age: number;
}
