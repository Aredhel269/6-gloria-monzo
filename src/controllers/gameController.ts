import { Request, Response } from 'express';
import Game from '../models/game';

// Controlador per crear una nova tirada per un jugador específic
export const createGameForPlayer = async (req: Request, res: Response) => {
  try {
    const playerId = parseInt(req.params.id);
    const { dice1, dice2, isWin } = req.body;

    const game = await Game.create({ playerId, dice1, dice2, isWin });
    return res.status(201).json(game);
  } catch (error) {
    return res.status(500).json({ message: 'Error creating the roll', error });
  }
};

// Controlador per eliminar totes les tirades d'un jugador específic
export const deleteGamesForPlayer = async (req: Request, res: Response) => {
  try {
    const playerId = parseInt(req.params.id);
    await Game.destroy({ where: { playerId } });
    return res.status(204).json({ message: 'Rolls successfully deleted for the player' });
  } catch (error) {
    return res.status(500).json({ message: 'Error deleting the rolls', error });
  }
};

// Controlador per obtenir totes les tirades d'un jugador específic
export const getGamesForPlayer = async (req: Request, res: Response) => {
  try {
    const playerId = parseInt(req.params.id);
    const games = await Game.findAll({ where: { playerId } });

    if (games.length === 0) {
      return res.status(404).json({ message: 'No rolls found for the player' });
    }

    return res.status(200).json(games);
  } catch (error) {
    return res.status(500).json({ message: 'Error getting the player\'s rolls', error });
  }
};
