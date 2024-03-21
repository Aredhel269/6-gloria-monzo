import { Request, Response } from 'express';
import Player from '../models/player';

// Controlador per crear un nou jugador
export const createPlayer = async (req: Request, res: Response) => {
  try {
    const { name } = req.body; // Suposant que el nom del jugador està a req.body

    // Comprovació si s'ha proporcionat un nom
    if (!name) {
      return res.status(400).json({ message: 'El nom del jugador és obligatori' });
    }

    // Crea el jugador a la base de dades
    const player = await Player.create({ name });

    // Retorna el jugador creat
    return res.status(201).json(player);
  } catch (error) {
    console.error('Error en crear el jugador:', error);
    return res.status(500).json({ message: 'Hi ha hagut un error en crear el jugador' });
  }
};


// Controlador per obtenir tots els jugadors
export const getAllPlayers = async (req: Request, res: Response) => {
  try {
    const players = await Player.findAll();
    return res.status(200).json(players);
  } catch (error) {
    return res.status(500).json({ message: "Error en l'obtenció dels jugadors", error });
  }
};

// Altres controladors per a les operacions CRUD dels jugadors, com modificar o eliminar un jugador
