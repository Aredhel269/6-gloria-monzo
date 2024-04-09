import { Request, Response } from "express";
import Player from "../models/player";

export default class RankingController {
  public static async getRanking(req: Request, res: Response): Promise<void> {
    try {
      const players = await Player.findAll();

      // Calcula el percentatge d'èxit per cada jugador
      const rankedPlayers = players.map((player) => {
        const successRate = player.calculateSuccessRate();
        return { playerId: player.id, successRate };
      });

      export const getRanking = async (_req: Request, res: Response) => {
        const players= await Player.findAll({ order: [ [ 'winPercentage', 'DESC' ] ] });
      
        const averageWinPercentage = await getAverageWinPercentage();
      
        const result = { players, averageWinPercentage };
      
        return res.status(200).send(result);

      // Ordena els jugadors per percentatge d'èxit
      rankedPlayers.sort((a, b) => b.successRate - a.successRate);

      // Calcula el percentatge d'èxit mitjà
      const totalSuccessRate = rankedPlayers.reduce(
        (acc, player) => acc + player.successRate,
        0
      );
      const averageSuccessRate =
        totalSuccessRate / rankedPlayers.length || 0;

      res.status(200).json({ rankedPlayers, averageSuccessRate });
    } catch (error) {
      res.status(500).json({ message: "Error getting the ranking", error });
    }
  }

  public static async getLoser(req: Request, res: Response): Promise<void> {
    try {
      const loser = await Player.findOne({
        order: [["successRate", "ASC"]],
      });
      res.status(200).json(loser);
    } catch (error) {
      res.status(500).json({ message: "Error getting the loser", error });
    }
  }

  public static async getWinner(req: Request, res: Response): Promise<void> {
    try {
      const winner = await Player.findOne({
        order: [["successRate", "DESC"]],
      });
      res.status(200).json(winner);
    } catch (error) {
      res.status(500).json({ message: "Error getting the winner", error });
    }
  }
}
