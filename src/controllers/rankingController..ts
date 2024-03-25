import { Request, Response } from "express";
import Ranking from "../models/ranking";
import Player from "../models/player";

class RankingController {
  // Controlador per obtenir el rànquing de jugadors GET
  public async getRanking(req: Request, res: Response): Promise<void> {
    try {
      const players = await Player.findAll();

      // Calcula el percentatge d'èxit per cada jugador
      const rankedPlayers = players.map((player) => {
        const successRate = player.calculateSuccessRate(); // Implementar aquest mètode al model de Player
        return { playerId: player.id, successRate };
      });

      // Ordena els jugadors per percentatge d'èxit
      rankedPlayers.sort((a, b) => b.successRate - a.successRate);

      // Calcula el percentatge d'èxit mitjà
      const totalSuccessRate = rankedPlayers.reduce(
        (acc, player) => acc + player.successRate,
        0
      );
      const averageSuccessRate = totalSuccessRate / rankedPlayers.length;

      res.status(200).json({ rankedPlayers, averageSuccessRate });
    } catch (error) {
      res.status(500).json({ message: "Error getting the ranking", error });
    }
  }

  // Controlador per obtenir el jugador amb el pitjor percentatge d'èxit GET
  public async getLoser(req: Request, res: Response): Promise<void> {
    try {
      const loser = await Ranking.findOne({ order: [["successRate", "ASC"]] });
      res.status(200).json(loser);
    } catch (error) {
      res.status(500).json({ message: "Error getting the loser", error });
    }
  }

  // Controlador per obtenir el jugador amb el millor percentatge d'èxit GET
  public async getWinner(req: Request, res: Response): Promise<void> {
    try {
      const winner = await Ranking.findOne({
        order: [["successRate", "DESC"]],
      });
      res.status(200).json(winner);
    } catch (error) {
      res.status(500).json({ message: "Error getting the winner", error });
    }
  }
}

export default new RankingController();





