import { Request, Response } from "express";
import Game from "../models/game";

export default class GameController {
  // Controlador per crear una nova tirada per un jugador específic POST
  public static async createGameForPlayer(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const playerId = parseInt(req.params.id);
      console.log("PLAYERID", playerId);

      // Calcular els valors dels daus
      const dice1 = Math.floor(Math.random() * 6) + 1;
      const dice2 = Math.floor(Math.random() * 6) + 1;

      // Determinar si el jugador ha guanyat o no
      const total = dice1 + dice2;
      const isWin = total === 7;

      console.log("Dice 1:", dice1);
      console.log("Dice 2:", dice2);
      console.log("Total:", total);
      console.log("Win?", isWin);

      // Guardar la tirada en la base de dades
      const game = await Game.create({ playerId, dice1, dice2, isWin });
      console.log("game", game);

      res.status(201).json(game);
    } catch (error) {
      console.error("Error creating game:", error);
      res.status(500).json({ message: "There was an error creating the roll" });
    }
  }

  // Controlador per obtenir totes les tirades d'un jugador específic GET
  public static async getGamesForPlayer(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const playerId = parseInt(req.params.id);
      if (isNaN(playerId)) {
        res.status(400).json({ message: "Invalid player ID" });
        return;
      }

      const games = await Game.findAll({ where: { playerId } });

      if (games.length === 0) {
        res.status(404).json({ message: "No rolls found for the player" });
        return;
      }

      res.status(200).json(games);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error getting the player's rolls", error });
    }
  }

  // Controlador per eliminar totes les tirades d'un jugador específic DELETE
  public static async deleteGamesForPlayer(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const playerId = parseInt(req.params.id);
      if (isNaN(playerId)) {
        res.status(400).json({ message: "Invalid player ID" });
        return;
      }

      await Game.destroy({ where: { playerId } });
      res
        .status(204)
        .json({ message: "Rolls successfully deleted for the player" });
    } catch (error) {
      res.status(500).json({ message: "Error deleting the rolls", error });
    }
  }
}