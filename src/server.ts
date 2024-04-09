import express from "express";
import playerRoutes from "./routes/playerRoutes";
import gameRoutes from "./routes/gameRoutes";
import rankingRoutes from "./routes/rankingRoutes";
import dotenv from "dotenv";
import { sequelize } from "./config/database";

// Carrega les variables d'entorn des del fitxer .env
dotenv.config();

// Crea una instància d'Express
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware per analitzar el cos de les sol·licituds com a JSON
app.use(express.json());

// Definir una ruta GET per la ruta principal
app.get("/", (req, res) => {
  res.send("Benvingut a la pàgina principal!");
});
/* 
app.get("/", (req, res) => {
  res.send("Hola món!");
}); */

// Utilitza els routers per a cada recurs
app.use("/players", playerRoutes); // Rutes del recurs jugador
app.use("/games", gameRoutes); // Rutes del recurs joc
app.use("/ranking", rankingRoutes); // Rutes del recurs classificació

app.listen(PORT, () => {
  console.log(`Servidor escoltant al port ${PORT}`);
});
