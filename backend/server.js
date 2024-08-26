import dotenv from "dotenv"; // Load environment variables from a .env file into process.env
dotenv.config();

import express from "express"; // Import Express web framework
import databaseConnection from "./database/database.js"; // Import database connection function
import cors from "cors"; // Import CORS middleware for enabling Cross-Origin Resource Sharing
import bodyParser from "body-parser";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import cloudinary from "cloudinary";
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


// Import user routes
import registerRoutes from "./routes/user.routes.js";
import incomeRoutes from "./routes/income.routes.js";
import expensesRoutes from "./routes/expenses.routes.js";
import loanRoutes from "./routes/loan.routes.js";
import subscriberRoutes from "./routes/subscriber.routes.js";
import currencyPopupRoutes from "./routes/currencyPopup.routes.js";
import taskRoutes from "./routes/task.routes.js";
import feedbackRoutes from "./routes/feedback.route.js";
import budgetRoutes from "./routes/budget.routes.js";

const app = express(); // Create an Express application
const PORT = process.env.PORT || 8000; // Set the port from environment variables or default to 5000

databaseConnection(); // Connect to the database

// Middleware to parse incoming request bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());

// Use __dirname with import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
const __dirnames = path.resolve();

// Middleware to enable CORS
app.use(
  cors({
    origin: "http://localhost:8000",
    credentials: true,
  })
);

// Register user routes
app.use("/api/user", registerRoutes);
app.use("/api/income", incomeRoutes);
app.use("/api/expenses", expensesRoutes);
app.use("/api/loan", loanRoutes);
app.use("/api/subscribe", subscriberRoutes);
app.use("/api/currencyPopup", currencyPopupRoutes);
app.use("/api/task", taskRoutes);
app.use("/api/feedback", feedbackRoutes); // This is the correct path
app.use("/api/budget", budgetRoutes);

// app.use(express.static(path.join(__dirnames, "/frontend/dist")));
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
// });

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
