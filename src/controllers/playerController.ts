import { Request, Response } from "express";
import Player from "../models/player";

// Controlador per crear un nou jugador
export const createPlayer = async (req: Request, res: Response) => {
  try {
    let { name } = req.body;

    // Si no s'ha proporcionat cap nom, assignem el valor "ANÒNIM"
    if (!name) {
      name = "ANÒNIM";
    }

    // Creem el jugador a la base de dades sense proporcionar l'id
    const player = await Player.create({
      name,
      registrationDate: new Date(),
    } as Player);

    // Retornem el jugador creat
    return res.status(201).json(player);
  } catch (error) {
    console.error("Error en crear el jugador:", error);
    return res
      .status(500)
      .json({ message: "Hi ha hagut un error en crear el jugador" });
  }
};

// Controlador per modificar el nom d'un jugador
export const updatePlayerName = async (req: Request, res: Response) => {
  try {
    const playerId = parseInt(req.params.id); // Obtenim l'identificador del jugador des de la ruta
    const { name } = req.body; // Obtenim el nou nom del jugador des del cos de la petició

    // Busquem el jugador per l'ID
    const player = await Player.findByPk(playerId);

    // Comprovem si el jugador existeix
    if (!player) {
      return res.status(404).json({ message: "Jugador no trobat" });
    }

    // Actualitzem el nom del jugador
    player.name = name;
    await player.save(); // Guardem els canvis a la base de dades

    // Retornem el jugador actualitzat
    return res.status(200).json(player);
  } catch (error) {
    console.error("Error en actualitzar el nom del jugador:", error);
    return res
      .status(500)
      .json({
        message: "Hi ha hagut un error en actualitzar el nom del jugador",
      });
  }
};

// Controlador per obtenir tots els jugadors
export const getAllPlayers = async (req: Request, res: Response) => {
  try {
    const players = await Player.findAll();
    return res.status(200).json(players);
  } catch (error) {
    console.error("Error en obtenir els jugadors:", error);
    return res
      .status(500)
      .json({ message: "Hi ha hagut un error en obtenir els jugadors" });
  }
};
