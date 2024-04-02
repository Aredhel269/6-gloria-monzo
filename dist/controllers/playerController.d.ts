import { Request, Response } from "express";
export default class PlayerController {
    createPlayer(req: Request, res: Response): Promise<void>;
    updatePlayerName(req: Request, res: Response): Promise<void>;
    getAllPlayers(req: Request, res: Response): Promise<void>;
}
