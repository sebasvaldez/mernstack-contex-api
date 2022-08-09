import mongoose from "mongoose";
import { MONGODB_URI } from "./config.js";

// creando la base de datos en mongodb

export async function connectDB() {
  try {
    const db=await mongoose.connect(MONGODB_URI);
    console.log(`conectado a ${db.connection.name}`)

  } catch (error) {
    console.log(error);
  }
}
