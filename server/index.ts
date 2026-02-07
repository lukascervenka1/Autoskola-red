import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.json());
  app.use(express.static(staticPath));

  // --- API Routes ---
  app.post("/api/register", async (req, res) => {
    try {
      const data = req.body;

      // TODO: Replace with real SMTP credentials
      // For Gmail: use "service: 'gmail'" and an App Password
      // For others: use host, port, secure, auth
      // const transporter = nodemailer.createTransport({
      //   host: "smtp.example.com",
      //   port: 587,
      //   secure: false, 
      //   auth: {
      //     user: process.env.SMTP_USER || "user@example.com",
      //     pass: process.env.SMTP_PASS || "password",
      //   },
      // });

      // LOGGING FOR NOW (Simulation)
      console.log("---------------------------------------------------");
      console.log("⚠️ EMAIL MOCK SENDING (Configure SMTP in server/index.ts)");
      console.log("FROM: Web Form <noreply@autoskola.red>");
      console.log("TO: info@autoskola.red"); // Change to target email
      console.log("SUBJECT: Nová registrace - " + data.firstName + " " + data.lastName);
      console.log("DATA:", JSON.stringify(data, null, 2));
      console.log("---------------------------------------------------");

      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      res.status(200).json({ success: true, message: "Registration received" });
    } catch (error) {
      console.error("Registration error:", error);
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  });

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
