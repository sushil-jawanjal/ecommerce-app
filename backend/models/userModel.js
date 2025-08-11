import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    cartData: { type: Object, default: {} }, //whenever the new user login then empty userCart || object will be created
  },
  { minimize: false }
); //we are using {minimize:false} because we have created empty object for userCart so mongoDb neglate the empty object it will not show in mongoDb so that's why we use this {minimize:false} to show empty userCart

const userModel = mongoose.models.user || mongoose.model("user", userSchema);
export default userModel;
