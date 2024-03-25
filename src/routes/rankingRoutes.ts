import { Router } from "express";
import gameController from "../controllers/gameController"; // Importem el controlador de jocs

// Creem una nova instància del router d'Express
const router = Router(); 
// Definim les rutes per a les operacions relacionades amb el ranking

// Ruta per obtenir el ranking de tots els jugadors orde 
router.get("/:playerId/rounds", gameController.getGamesForPlayer); 



//(POST)
router.post("/:playerId/play", gameController.createGameForPlayer);

// Ruta per obtenir totes les tirades d'un jugador (GET)

// Ruta per esborrar totes les tirades d'un jugador (DELETE)
router.delete("/:playerId/rounds", gameController.deleteGamesForPlayer);

// Exportem el router perquè pugui ser utilitzat en altres parts de l'aplicació
export default router; 