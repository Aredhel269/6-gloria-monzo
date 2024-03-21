import { Request, Response } from 'express';
import Roll from '../models/game';

// Controlador per crear una nova tirada
export const createRoll = async (req: Request, res: Response) => {
  try {
    const { playerId, dice1, dice2, isWin } = req.body;
    const roll = await Roll.create({ playerId, dice1, dice2, isWin });
    return res.status(201).json(roll);
  } catch (error) {
    return res.status(500).json({ message: 'Error en la creació de la tirada', error });
  }
};

// Controlador per obtenir totes les tirades
export const getAllRolls = async (req: Request, res: Response) => {
  try {
    const rolls = await Roll.findAll();
    return res.status(200).json(rolls);
  } catch (error) {
    return res.status(500).json({ message: "Error en l'obtenció de les tirades", error });
  }
};

// Altres controladors per a les operacions CRUD de les tirades, com modificar o eliminar una tirada
