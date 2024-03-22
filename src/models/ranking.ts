import express from 'express';
import { getRanking, getLoser, getWinner } from '../controllers/rankingController.';

const router = express.Router();

// Ruta per obtenir el rànquing de jugadors/es
router.get('/', getRanking);

// Ruta per obtenir el jugador/a amb el pitjor percentatge d'èxit
router.get('/loser', getLoser);

// Ruta per obtenir el jugador/a amb el millor percentatge d'èxit
router.get('/winner', getWinner);

export default router;
