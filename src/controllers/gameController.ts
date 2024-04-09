import { Request, Response } from "express";
import Game from "../models/game";

console.log("hola");
export default class GameController {
  // Controlador per crear una nova tirada per un jugador específic POST
  public static async createGameForPlayer(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const playerId = parseInt(req.params.id);
      console.log("PLAYERID", playerId);
      const { dice1, dice2, isWin } = req.body;

      console.log("IN GAME CONTROLLER TRY");

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
      await Game.destroy({ where: { playerId } });
      res
        .status(204)
        .json({ message: "Rolls successfully deleted for the player" });
    } catch (error) {
      res.status(500).json({ message: "Error deleting the rolls", error });
    }
  }
}
/*
const deleteUserGames = async (req, res) => {
  try {
    const userId = req.params.id;
    const existingUser = await userRepository.retrieveById(userId);
    if (!existingUser) throw new NotCorrectParamsError('No player found');
    await gameRepository.deleteUserGames(userId);
    // await Games.destroy({ where: { UserId: playerId } });
    return res.status(200).json({ message: `All games for ${existingUser.username} were deleted` });
  } catch (error) {
    if (error instanceof NotCorrectParamsError) return res.status(401).json({ message: error.message });
    return res.status(500).json({ message: 'Error playing game.', error });
  }
};
*/
