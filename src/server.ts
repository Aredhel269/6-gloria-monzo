import express from 'express';
import bodyParser from 'body-parser';
import { router } from './app';

const app = express();

// Utilitza body-parser com a middleware per analitzar el cos de la sol·licitud com a JSON
app.use(bodyParser.json());

// Utilitza el router principal de l'aplicació
app.use('/', router);

// Inicia el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escoltant al port ${PORT}`);
});
