// const { name } = require("ci-info");
const express= require ("express");
const app=express();
const PORT=7000;

// const rooms=[
//     {
//       "customer-name":
//       "number of seats":
//       "pricefor 1 hour":
//       "Customer Name":
//       "start time":
//       "End time":
//       "Room id":
//       "Room name":
//       "booked status":
//       "customer name":
//       "Date":
//       "Start time":
//       "End time":
//      "Customer name":
//      "Room name":
//      "Date":
//      "Start time":
//      "End time":

      

//     },
// ]





app.get("/",(request,response)=>{
    response.send("Hello Amar you came from 🏠 to here🙋‍♂️🙋‍♂️🙋‍♂️ via 🚢🚢🚢buddy 🤩🤩  ");
})





















app.listen(PORT,()=>console.log("App is started in",7000));
