import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import morgan from "morgan";
import orderRouter from "./routes/orderRoute.js";

dotenv.config();
connectCloudinary();

// App Config
const app = express();
const PORT = process.env.PORT || 4000;
connectDB();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// API endpoints
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(PORT, () => {
  console.log("Server started on PORT:" + PORT);
});
