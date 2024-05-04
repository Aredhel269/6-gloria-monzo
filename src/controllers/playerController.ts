import { Request, Response } from "express";
import Player from "../models/player";

export default class PlayerController {
  public static async createPlayer(req: Request, res: Response): Promise<void> {
    try {
      let { name } = req.body;

      if (!name) {
        name = "ANONYMOUS";
      }

      const player = await Player.create({
        name,
        registrationDate: new Date(),
      } as Player);

      res.status(201).json(player);
    } catch (error) {
      console.error("Error creating player:", error);
      res
        .status(500)
        .json({ message: "There was an error creating the player" });
    }
  }

  public static async updatePlayerName(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const playerId = parseInt(req.params.id);
      const { name } = req.body;

      const player = await Player.findByPk(playerId);

      if (!player) {
        res.status(404).json({ message: "Player not found" });
        return;
      }

      player.name = name;
      await player.save();

      res.status(200).json(player);
    } catch (error) {
      console.error("Error updating player name:", error);
      res
        .status(500)
        .json({ message: "There was an error updating the player's name" });
    }
  }

  public static async getAllPlayers(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const players = await Player.findAll();
      res.status(200).json(players);
    } catch (error) {
      console.error("Error getting players:", error);
      res
        .status(500)
        .json({ message: "There was an error getting the players" });
    }
  }

  public static async updatePlayerSuccessRate(playerId: number, isWin: boolean): Promise<void> {
    try {
      const player = await Player.findByPk(playerId);
      if (!player) {
        console.error("Player not found");
        return;
      }

      if (isWin) {
        player.wins += 1;
      } else {
        player.losses += 1;
      }

      // Actualitzar el total de partides
      player.totalGames = player.wins + player.losses;

      // Calcular la taxa d'èxit
      if (player.totalGames !== 0) {
        player.successRate = (player.wins / player.totalGames) * 100;
      } else {
        player.successRate = 0;
      }

      await player.save();
    } catch (error) {
      console.error("Error updating player success rate:", error);
    }
  }
}
