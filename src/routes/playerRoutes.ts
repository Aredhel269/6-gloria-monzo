import { Router } from "express";
import  PlayerController from "../controllers/playerController"; 
// Importem el controlador de jugadors
// Creem una nova instància del router d'Express
const router = Router(); 
const playerController = new PlayerController();

// Definim les rutes per a les operacions CRUD de jugadors

// Ruta per crear un nou jugador (POST)
router.post("/", playerController.createPlayer);
// Ruta per actualitzar el nom d'un jugador existent (PUT)
router.put("/:id", playerController.updatePlayerName);
// Ruta per obtenir tots els jugadors (GET)
router.get("/", playerController.getAllPlayers); 

// Exportem el router perquè pugui ser utilitzat en altres parts de l'aplicació
export default router; 
