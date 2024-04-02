import { Model } from 'sequelize';
declare class Game extends Model {
    id: number;
    playerId: number;
    dice1: number;
    dice2: number;
    isWin: boolean;
    static associate(): void;
}
export default Game;
