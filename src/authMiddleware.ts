import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

// Middleware per autenticar el token JWT
const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  // Obtenim el token d'autenticació de la capçalera de la sol·licitud
  const token = req.headers["authorization"]?.split(" ")[1];

  // Comprovem si s'ha proporcionat un token
  if (!token) {
    // Si no es proporciona cap token, retornem un error 401 (Unauthorized)
    return res
      .status(401)
      .json({ message: "No authentication token provided" });
  }

  // Verifiquem el token utilitzant la clau secreta
  jwt.verify(token, "your_secret_key", (err, decoded) => {
    // Si hi ha un error en la verificació del token
    if (err) {
      // Si el token no és vàlid, retornem un error 403 (Forbidden)
      return res.status(403).json({ message: "Invalid token" });
    }
    // Si el token és vàlid, afegim la informació de l'usuari a la sol·licitud per a ús posterior
    req.body.user = decoded;
    // Procedim al següent middleware
    next();
  });
};

export default authenticateToken;
