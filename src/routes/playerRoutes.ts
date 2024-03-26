import { Router } from "express";
import PlayerController from "../controllers/playerController"; // Importem el controlador de jugadors
// Creem una nova instància del router d'Express
const router = Router(); 

// Definim les rutes per a les operacions CRUD de jugadors

// Ruta per crear un nou jugador (POST)
router.post("/", PlayerController.createPlayer);
// Ruta per actualitzar el nom d'un jugador existent (PUT)
router.put("/:id", PlayerController.updatePlayerName);
// Ruta per obtenir tots els jugadors (GET)
router.get("/", PlayerController.getAllPlayers); 

// Exportem el router perquè pugui ser utilitzat en altres parts de l'aplicació
export default router; 
