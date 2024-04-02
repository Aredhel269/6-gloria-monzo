import { Request, Response } from "express";
export default class GameController {
    createGameForPlayer(req: Request, res: Response): Promise<void>;
    deleteGamesForPlayer(req: Request, res: Response): Promise<void>;
    getGamesForPlayer(req: Request, res: Response): Promise<void>;
}
