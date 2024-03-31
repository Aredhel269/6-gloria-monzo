import express from "express";
import playerRoutes from "./routes/playerRoutes";
import gameRoutes from "./routes/gameRoutes";
import rankingRoutes from "./routes/rankingRoutes";
import dotenv from 'dotenv';

// Carrega les variables d'entorn des del fitxer .env
dotenv.config();

// Crea una instància d'Express
const app = express();

// Configura una ruta d'exemple
app.get("/", (req, res) => {
  res.send('Hola món!');
});

// Middleware per analitzar el cos de les sol·licituds com a JSON
app.use(express.json());

// Utilitza els routers per a cada recurs
app.use("/players", playerRoutes); // Rutes del recurs jugador
app.use("/games", gameRoutes); // Rutes del recurs joc
app.use("/ranking", rankingRoutes); // Rutes del recurs classificació

export default app;
