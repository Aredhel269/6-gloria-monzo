import { Request, Response } from "express";
import Player from "../models/player";

export default class RankingController {
  public static async getRanking(req: Request, res: Response): Promise<void> {
    try {
      const players = await Player.findAll({ order: [['winPercentage', 'DESC']] });

      const rankedPlayers = players.map((player) => ({
        playerId: player.id,
        successRate: player.succesRate,
      }));

      const averageSuccessRate = players.reduce(
        (acc, player) => acc + player.succesRate,
        0
      ) / players.length || 0;

      res.status(200).json({ rankedPlayers, averageSuccessRate });
    } catch (error) {
      res.status(500).json({ message: "Error getting the ranking", error });
    }
  }

  public static async getLoser(req: Request, res: Response): Promise<void> {
    try {
      const loser = await Player.findOne({
        order: [["winPercentage", "ASC"]],
      });
      res.status(200).json(loser);
    } catch (error) {
      res.status(500).json({ message: "Error getting the loser", error });
    }
  }

  public static async getWinner(req: Request, res: Response): Promise<void> {
    try {
      const winner = await Player.findOne({
        order: [["winPercentage", "DESC"]],
      });
      res.status(200).json(winner);
    } catch (error) {
      res.status(500).json({ message: "Error getting the winner", error });
    }
  }
}
