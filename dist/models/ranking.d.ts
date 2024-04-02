import { Model } from 'sequelize';
interface RankingAttributes {
    id: number;
    playerId: number;
    successRate: number;
}
declare class Ranking extends Model<RankingAttributes> implements RankingAttributes {
    id: number;
    playerId: number;
    successRate: number;
}
export default Ranking;
