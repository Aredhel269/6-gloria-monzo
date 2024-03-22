import { Request, Response } from 'express';
import Player from '../models/player';
// Controlador per obtenir el rànquing de jugadors/es ordenat per percentatge d'èxits i la mitjana del percentatge d'èxits del conjunt de tots els jugadors/es
export const getRanking = async (req: Request, res: Response) => {
    try {
      // Aquí va el codi per obtenir el rànquing
    } catch (error) {
      return res.status(500).json({ message: 'Error getting the ranking', error });
    }
  };
  
  // Controlador per obtenir el jugador/a amb el pitjor percentatge d'èxit
  export const getLoser = async (req: Request, res: Response) => {
    try {
      // Aquí va el codi per obtenir el pitjor jugador
    } catch (error) {
      return res.status(500).json({ message: 'Error getting the loser', error });
    }
  };
  
  // Controlador per obtenir el jugador/a amb el millor percentatge d'èxit
  export const getWinner = async (req: Request, res: Response) => {
    try {
      // Aquí va el codi per obtenir el millor jugador
    } catch (error) {
      return res.status(500).json({ message: 'Error getting the winner', error });
    }
  };
  