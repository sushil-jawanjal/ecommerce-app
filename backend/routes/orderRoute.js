import express from "express";
import {
  placeOrder,
  placeOrderStripe,
  placeOrderRazorpay,
  allOrders,
  userOrders,
  updateStatus,
  verifyStripe,
  verifyRazorpay,
} from "../controllers/orderController.js";
import adminAuth from "../middleware/adminAuth.js";
import authUser from "../middleware/auth.js";

const orderRouter = express.Router();

// Admin Features
orderRouter.post("/list", adminAuth, allOrders);
orderRouter.post("/status", adminAuth, updateStatus);

// Payment Feature
orderRouter.post("/place", authUser, placeOrder); //for cash on delivery
orderRouter.post("/stripe", authUser, placeOrderStripe); //for cash on delivery
orderRouter.post("/razorpay", authUser, placeOrderRazorpay); //for cash on delivery

// user feature
orderRouter.post("/userorders", authUser, userOrders);

// verify payment
orderRouter.post("/verifyStripe", authUser, verifyStripe);

// verify razorpay
orderRouter.post("/verifyRazorpay", authUser, verifyRazorpay);

export default orderRouter;
