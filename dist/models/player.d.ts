import { Model } from 'sequelize';
interface IPlayerAttributes {
    id: number;
    name: string;
    registrationDate: Date;
    wins: number;
    totalGames: number;
    successRate: number;
}
declare class Player extends Model<IPlayerAttributes> implements IPlayerAttributes {
    id: number;
    name: string;
    registrationDate: Date;
    wins: number;
    totalGames: number;
    successRate: number;
    calculateSuccessRate(): number;
}
export default Player;
