import { Request, Response } from "express";
export default class RankingController {
    getRanking(req: Request, res: Response): Promise<void>;
    getLoser(req: Request, res: Response): Promise<void>;
    getWinner(req: Request, res: Response): Promise<void>;
}
