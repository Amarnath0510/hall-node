
import express, { request, response } from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

import {roomsRouter} from "./routes/rooms.js";
dotenv.config();

const app=express();
const PORT=7001;
app.use(express.json())
// const rooms=[
//     {
//       "id": "100",
//       "customername": "Amarnath",
//       "roomname": "Elite28",
//       "bookedstatus": "confirmed",
//       "date": "22/11/21",
//       "starttime": "10am",
//       "endtime": "8pm"
//     },
//     {
//       "id": "101",
//       "customername": "Suresh",
//       "roomname": "Elite29",
//       "bookedstatus": "confirmed",
//       "date": "22/11/21",
//       "starttime": "6am",
//       "endtime": "7pm"
//     },
//     {
//       "id": "102",
//       "customername": "Murali",
//       "roomname": "Elite30",
//       "bookedstatus": "waiting",
//       "date": "23/11/21",
//       "starttime": "9am",
//       "endtime": "10pm"
//     },
//     {
//       "id": "103",
//       "customername": "Edwin",
//       "roomname": "Elite31",
//       "bookedstatus": "waiting",
//       "date": "23/11/21",
//       "starttime": "5am",
//       "endtime": "8pm"
//     },
//     {
//       "id": "104",
//       "customername": "Steve",
//       "roomname": "Elite32",
//       "bookedstatus": "confirmed",
//       "date": "22/11/21",
//       "starttime": "11am",
//       "endtime": "10pm"
//     },
//     {
//       "id": "105",
//       "customername": "Mohammad",
//       "roomname": "Elite33",
//       "bookedstatus": "confirmed",
//       "date": "22/11/21",
//       "starttime": "2am",
//       "endtime": "1pm"
//     },
//     {
//       "id": "106",
//       "customername": "Priya",
//       "roomname": "Elite34",
//       "bookedstatus": "waiting",
//       "date": "22/11/21",
//       "starttime": "10am",
//       "endtime": "8pm"
//     },
//     {
//       "id": "107",
//       "customername": "Amshika",
//       "roomname": "Elite35",
//       "bookedstatus": "confirmed",
//       "date": "22/11/21",
//       "starttime": "5am",
//       "endtime": "4pm"
//     }
//   ]
  
// const MONGO_URL="mongodb://localhost";

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


// app.get("/rooms",async(request,response)=>{

  
//   console.log(request.query);
//   const bookedstatus =await getBookedCustomerdata();
//   console.log(bookedstatus);
//   response.send(bookedstatus);
// });


// app.get("/rooms",async(request,response)=>{

  
//   console.log(request.query);
//   const bookedcustomer =await getBookedRoomName();

//   console.log(bookedcustomer);
//   response.send(bookedcustomer);
// });



// app.post("/rooms",async(request,response)=>{
//   const data=request.body;
//   const add=await createRoom(data);
//   response.send(add);

// });



// app.get("/rooms/:id",async(request,response)=>{
//     console.log(request.params);
//     const{id}=request.params;
//     const room= await getRoomById(id);
  
//     console.log(room);
  
//     room
//     ?response.send(room)
//     :response.status(404).send({msg:"No matching room found"})
    
// });

app.listen(PORT,()=>console.log("App is started in",PORT))




