import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes"; 

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Usa las rutas
app.use("/api", authRoutes); 

app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en http://localhost:${PORT}`);
});
