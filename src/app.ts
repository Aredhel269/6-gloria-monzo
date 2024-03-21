import express from 'express';
import { createPlayer, getAllPlayers } from './controllers/playerController';

// Crea un nou router Express
export const router = express.Router();

// Definició de les rutes
router.post('/players', createPlayer); // Ruta per crear un nou jugador
router.get('/players', getAllPlayers); // Ruta per obtenir tots els jugadors

// Pots afegir més rutes aquí per altres funcionalitats de l'aplicació

// Exporta el router perquè puguis utilitzar-lo en el teu fitxer server.ts
export default router;
