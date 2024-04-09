import { Router } from "express";
import GameController from "../controllers/gameController"; // Importem el controlador de jocs

// Creem una nova instància del router d'Express
const gameRouter = Router();
// Definim les rutes per a les operacios relacionades amb el joc

// Ruta per jugar una nova tirada de daus (POST)
gameRouter.post("/play/:id", GameController.createGameForPlayer);

// Ruta per obtenir totes les tirades d'un jugador (GET)
gameRouter.get("/rounds/:id", GameController.getGamesForPlayer);

// Ruta per esborrar totes les tirades d'un jugador (DELETE)
gameRouter.delete("/remove/:id", GameController.deleteGamesForPlayer);

// Exportem el router perquè pugui ser utilitzat en altres parts de l'aplicació
export default gameRouter;
