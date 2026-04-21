import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Vercel will look for your static files here
const staticPath = path.resolve(__dirname, "..", "public"); 
app.use(express.static(staticPath));

app.get("*", (_req, res) => {
  res.sendFile(path.join(staticPath, "index.html"));
});

// IMPORTANT: Do NOT use app.listen() or server.listen()
// Vercel handles the port and the listening for you.
export default app;