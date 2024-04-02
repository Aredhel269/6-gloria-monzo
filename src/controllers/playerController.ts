import { Request, Response } from "express";
import Player from "../models/player";

export default class PlayerController {
// Controlador per crear un nou jugador POST
public async createPlayer (req: Request, res: Response): Promise<void> {
  try {
    let { name } = req.body;

    // Si no s'ha proporcionat cap nom, assignem el valor "ANÒNIM"
    if (!name) {
      name = "ANONYMOUS";
    }

    // Creem el jugador a la base de dades sense proporcionar l'id
    const player = await Player.create({
      name,
      registrationDate: new Date(),
    } as Player);

    // Retornem el jugador creat
    res.status(201).json(player);
  } catch (error) {
    console.error("Error creating player:", error);
    res
      .status(500)
      .json({ message: "There was an error creating the player" });
  }
};

// Controlador per modificar el nom d'un jugador PUT
public async updatePlayerName(req: Request, res: Response): Promise<void>  {
  try {
    const playerId = parseInt(req.params.id); // Obtenim l'identificador del jugador des de la ruta
    const { name } = req.body; // Obtenim el nou nom del jugador des del cos de la petició

    // Busquem el jugador per l'ID
    const player = await Player.findByPk(playerId);

    // Comprovem si el jugador existeix
    if (!player) {
      res.status(404).json({ message: "Player not found" });
      return;
    }

    // Actualitzem el nom del jugador
    player.name = name;
    await player.save(); // Guardem els canvis a la base de dades

    // Retornem el jugador actualitzat
    res.status(200).json(player);
  } catch (error) {
    console.error("Error updating player name:", error);
    res
      .status(500)
      .json({ message: "There was an error updating the player's name" });
  }
};

// Controlador per obtenir tots els jugadors
public async getAllPlayers(req: Request, res: Response): Promise<void> {
  

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
};