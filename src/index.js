import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";
dotenv.config({ path: "./env" });
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`App is listening on PORT ${process.env.PORT}`);
    });
    app.on("error", (error) => {
      console.error("Server error", error);
      process.exit(1);
    });
  })
  .catch((err) => {
    console.error("MONGODB connection failed", err);
  });
