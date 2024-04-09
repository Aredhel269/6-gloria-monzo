import { Request, Response } from "express";
import Game from "../models/game";

console.log('hola');
export default class GameController {
  // Controlador per crear una nova tirada per un jugador específic POST
  public static async createGameForPlayer(req: Request, res: Response): Promise<void> {
    try {
      const playerId = parseInt(req.params.id);
      console.log(playerId);
      const { dice1, dice2, isWin } = req.body;

      const game = await Game.create({ playerId, dice1, dice2, isWin });
      res.status(201).json(game);
      console.log(game);
    } catch (error) {  
      console.error("Error creating game:", error);
      res.status(500).json({ message: "There was an error creating the roll" });
    }
  }
  

  // Controlador per eliminar totes les tirades d'un jugador específic DELETE
  public static async deleteGamesForPlayer(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const playerId = parseInt(req.params.id);
      await Game.destroy({ where: { playerId } });
      res
        .status(204)
        .json({ message: "Rolls successfully deleted for the player" });
    } catch (error) {
      res.status(500).json({ message: "Error deleting the rolls", error });
    }
  }

  // Controlador per obtenir totes les tirades d'un jugador específic GET
  public static async getGamesForPlayer(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const playerId = parseInt(req.params.id);
      const games = await Game.findAll({ where: { playerId } });

      if (games.length === 0) {
        res.status(404).json({ message: "No rolls found for the player" });
      }

      res.status(200).json(games);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error getting the player's rolls", error });
    }
  }
}
