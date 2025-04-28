import { Request, Response } from "express";
import { authenticate } from "../handlers/authHandler";

export function login(req: Request, res: Response) {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: "Faltan datos de inicio de sesión." });
  }

  const student = authenticate(username, password);

  if (!student) {
    return res.status(401).json({ error: "Usuario o contraseña incorrectos." });
  }

  return res.status(200).json(student);
}
