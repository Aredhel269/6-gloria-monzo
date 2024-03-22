import { Request, Response } from 'express';
import Ranking from '../models/ranking';
import Player from '../models/player';

// Controlador per obtenir el rànquing de jugadors
export const getRanking = async (req: Request, res: Response) => {
  try {
    const players = await Player.findAll();
    
    // Calcula el percentatge d'èxit per cada jugador
    const rankedPlayers = players.map(player => {
      const successRate = player.calculateSuccessRate(); // Implementa aquest mètode al model de Player
      return { playerId: player.id, successRate };
    });

    // Ordena els jugadors per percentatge d'èxit
    rankedPlayers.sort((a, b) => b.successRate - a.successRate);

    // Calcula el percentatge d'èxit mitjà
    const totalSuccessRate = rankedPlayers.reduce((acc, player) => acc + player.successRate, 0);
    const averageSuccessRate = totalSuccessRate / rankedPlayers.length;
    
    return res.status(200).json({ rankedPlayers, averageSuccessRate });
  } catch (error) {
    return res.status(500).json({ message: 'Error getting the ranking', error });
  }
};

// Controlador per obtenir el jugador amb el pitjor percentatge d'èxit
export const getLoser = async (req: Request, res: Response) => {
  try {
    const loser = await Ranking.findOne({ order: [['successRate', 'ASC']] });
    return res.status(200).json(loser);
  } catch (error) {
    return res.status(500).json({ message: 'Error getting the loser', error });
  }
};

// Controlador per obtenir el jugador amb el millor percentatge d'èxit
export const getWinner = async (req: Request, res: Response) => {
  try {
    const winner = await Ranking.findOne({ order: [['successRate', 'DESC']] });
    return res.status(200).json(winner);
  } catch (error) {
    return res.status(500).json({ message: 'Error getting the winner', error });
  }
};
