import { Router } from "express";
import RankingController from "../controllers/rankingController.";

// Creem una nova instància del router d'Express
const rankingRouter = Router();
// Definim les rutes per a les operacions relacionades amb el ranking

// Ruta per obtenir el ranking de tots els jugadors
rankingRouter.get("/", RankingController.getRanking);

// Ruta per obtenir el jugador amb pitjor percentatge
rankingRouter.get("/loser", RankingController.getLoser);

// Ruta per obtenir el jugador amb millor percentatge
rankingRouter.get("/winner", RankingController.getWinner);

// Exportem el router perquè pugui ser utilitzat en altres parts de l'aplicació
export default rankingRouter;
