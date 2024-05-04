import { Request, Response } from "express";
import { sequelize } from "../config/database";
import Player from "../models/player";

export default class RankingController {
  public static async getRanking(req: Request, res: Response): Promise<void> {
    try {
      const players = await Player.findAll({
        attributes: [
          'id',
          'name',
          'registrationDate',
          'wins',
          'losses',
          'totalGames',
          [sequelize.literal('((wins / totalGames) * 100)'), 'winPercentage'], // Utilitza el mètode calculateWinPercentage() per calcular la winPercentage
          'createdAt',
          'updatedAt'
        ],
        order: [[sequelize.literal('(wins / totalGames)'), 'DESC']] // Ordena directament pel càlcul de la winPercentage
      });

      const rankedPlayers = players.map((player) => ({
        playerId: player.id,
        successRate: player.calculateWinPercentage(), // Utilitza el mètode calculateWinPercentage() per obtenir la winPercentage
      }));

      const averageSuccessRate = players.reduce(
        (acc, player) => acc + player.calculateWinPercentage(), // Utilitza el mètode calculateWinPercentage()
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