
import express, { request, response } from "express";
import { MongoClient } from "mongodb";

const app=express();
const PORT=7001;
app.use(express.json())
const rooms=[
    {
      "id": "100",
      "customername": "Amarnath",
      "roomname": "Elite28",
      "bookedstatus": "confirmed",
      "date": "22/11/21",
      "starttime": "10am",
      "endtime": "8pm"
    },
    {
      "id": "101",
      "customername": "Suresh",
      "roomname": "Elite29",
      "bookedstatus": "confirmed",
      "date": "22/11/21",
      "starttime": "6am",
      "endtime": "7pm"
    },
    {
      "id": "102",
      "customername": "Murali",
      "roomname": "Elite30",
      "bookedstatus": "waiting",
      "date": "23/11/21",
      "starttime": "9am",
      "endtime": "10pm"
    },
    {
      "id": "103",
      "customername": "Edwin",
      "roomname": "Elite31",
      "bookedstatus": "waiting",
      "date": "23/11/21",
      "starttime": "5am",
      "endtime": "8pm"
    },
    {
      "id": "104",
      "customername": "Steve",
      "roomname": "Elite32",
      "bookedstatus": "confirmed",
      "date": "22/11/21",
      "starttime": "11am",
      "endtime": "10pm"
    },
    {
      "id": "105",
      "customername": "Mohammad",
      "roomname": "Elite33",
      "bookedstatus": "confirmed",
      "date": "22/11/21",
      "starttime": "2am",
      "endtime": "1pm"
    },
    {
      "id": "106",
      "customername": "Priya",
      "roomname": "Elite34",
      "bookedstatus": "waiting",
      "date": "22/11/21",
      "starttime": "10am",
      "endtime": "8pm"
    },
    {
      "id": "107",
      "customername": "Amshika",
      "roomname": "Elite35",
      "bookedstatus": "confirmed",
      "date": "22/11/21",
      "starttime": "5am",
      "endtime": "4pm"
    }
  ]
  
const MONGO_URL="mongodb://localhost";

 async  function createConnection() {
    const client= new MongoClient(MONGO_URL);
    await client.connect();

    console.log("Mongodb Connected");
    return client;

  }
 const client= await createConnection();



 app.get("/",(request,response)=>{
  response.send("Hello Amar you came from 🏠 to here🙋‍♂️🙋‍♂️🙋‍♂️ via 🚢🚢🚢buddy 🤩🤩  ");
});




app.get("/rooms",async(request,response)=>{

  
  console.log(request.query);
  const bookedstatus =await client
  .db("task41")
  .collection("rooms")
  .aggregate([{$match:{bookedstatus:"confirmed"}}])
  .toArray();
  console.log(bookedstatus);
  response.send(bookedstatus);
});


app.get("/rooms",async(request,response)=>{

  
  console.log(request.query);
  const bookedcustomer =await client
  .db("task41")
  .collection("rooms")
  .aggregate([{$match:{bookedstatus:"confirmed"}},{ $group: {_id:"$customername"}}])
 .toArray();
  console.log(bookedcustomer);
  response.send(bookedcustomer);
});



app.post("/rooms",async(request,response)=>{
  const data=request.body;
  const add=await client
  .db("task41")
  .collection("rooms")
  .insertMany(data);
  response.send(add);

});



app.get("/rooms/:id",async(request,response)=>{
    console.log(request.params);
    const{id}=request.params;
    const room= await client
    .db("task41")
    .collection("rooms")
    .findOne({id:id});
  
    console.log(room);
  
    room
    ?response.send(room)
    :response.status(404).send({msg:"No matching room found"})
    
});

app.listen(PORT,()=>console.log("App is started in",PORT))
