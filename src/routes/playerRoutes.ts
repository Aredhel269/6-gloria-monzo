import { Router } from "express";
import  PlayerController from "../controllers/playerController"; 
// Importem el controlador de jugadors
// Creem una nova instància del router d'Express
const playerRouter = Router();

// Definim les rutes per a les operacions CRUD de jugadors

// Ruta per crear un nou jugador (POST)
playerRouter.post("/newplayer", PlayerController.createPlayer);
// Ruta per actualitzar el nom d'un jugador existent (PUT)
playerRouter.put("/:id", PlayerController.updatePlayerName);
// Ruta per obtenir tots els jugadors (GET)
playerRouter.get("/allplayers", PlayerController.getAllPlayers); 

export default playerRouter;