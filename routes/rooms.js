// import express = require("express");
import express  from "express";
import { getBookedCustomerdata, getBookedRoomName, createRoom, getRoomById } from "../helper.js";
const router=express.Router();

router
.route("/")
.get(async(request,response)=>{

  
    console.log(request.query);
    const bookedstatus =await getBookedCustomerdata();
    console.log(bookedstatus);
    response.send(bookedstatus);
  })
  
  
 .get(async(request,response)=>{
  
    
    console.log(request.query);
    const bookedcustomer =await getBookedRoomName();
  
    console.log(bookedcustomer);
    response.send(bookedcustomer);
  })
  
  
  
.post(async(request,response)=>{
    const data=request.body;
    const add=await createRoom(data);
    response.send(add);
  
  });
  
  
  
  router
  .route("/:id")
  .get(async(request,response)=>{
      console.log(request.params);
      const{id}=request.params;
      const room= await getRoomById(id);
    
      console.log(room);
    
      room
      ?response.send(room)
      :response.status(404).send({msg:"No matching room found"})
      
  });

  export const roomsRouter=router;