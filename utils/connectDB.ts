"use server"
import mongoose from "mongoose";

// Folosește MONGO_URI din .env.local
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error("Please define the MONGO_URI environment variable inside .env.local");
}

async function connectDB() { 
    try {
        // Dacă conexiunea există deja, nu reconectăm
        if (mongoose.connections[0].readyState) return;
        
        await mongoose.connect(MONGO_URI);
        console.log("Connected to DB");
    } catch (error) {
       console.log("DB connection error:", error); 
       throw error;
    }
}

export default connectDB;
