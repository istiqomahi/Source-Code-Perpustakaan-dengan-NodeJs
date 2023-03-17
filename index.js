import express from "express";
import cors from "cors";
import db from "./config/Database.js";
import BukuRoute from "./routes/BukuRoute.js";
import PeminjamRoute from "./routes/PeminjamRoute.js";
import PinjamanBukuRoute from "./routes/PinjamanBukuRoute.js";
import UserLoginRoute from "./routes/UserLoginRoute.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

dotenv.config();

const app = express();

try{
    await db.authenticate();
    console.log('Database connected');
}catch(error){
    console.log('Not connected database');
}

app.use(cookieParser());
app.use(cors({credentials:true, origin:'http://localhost:8000'}));
app.use(express.json());
app.use(BukuRoute);
app.use(PeminjamRoute);
app.use(PinjamanBukuRoute);
app.use(UserLoginRoute);

app.listen(8000, () => console.log(`Server running at port 8000`));