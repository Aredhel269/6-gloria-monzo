import express from "express";
import playerRoutes from "./src/routes/playerRoutes";
import gameRoutes from "./src/routes/gameRoutes";
import rankingRoutes from "./src/routes/rankingRoutes";

const app = express();

// Middleware per analitzar el cos de les sol·licituds com a JSON
app.use(express.json());

// Utilitzem els routers per a cada recurs
app.use("/players", playerRoutes); // Rutes del recurs jugador
app.use("/games", gameRoutes); // Rutes del recurs joc
app.use("/ranking", rankingRoutes); // Rutes del recurs classificació

// Inicia el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escoltant al port ${PORT}`);
});
export default app;