
import express, { request, response } from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

import {roomsRouter} from "./routes/rooms.js";
dotenv.config();

const app=express();
const PORT=process.env.PORT;
app.use(express.json())


const MONGO_URL=process.env.MONGO_URL;

 async  function createConnection() {
    const client= new MongoClient(MONGO_URL);
    await client.connect();

    console.log("Mongodb Connected");
    return client;

  }
 export const client= await createConnection();



 app.get("/",(request,response)=>{
  response.send("Hello Amar you came from 🏠 to here🙋‍♂️🙋‍♂️🙋‍♂️ via 🚢🚢🚢buddy 🤩🤩  ");
});

app.use("/rooms",roomsRouter);



app.listen(PORT,()=>console.log("App is started in",PORT))




