import { client } from "./index.js";

 async function getBookedRoomName() {
  return await client
    .db("task41")
    .collection("rooms")
    .aggregate([{ $match: { bookedstatus: "confirmed" } }, { $group: { _id: "$customername" } }]);
}
 async function createRoom(data) {
  return await client
    .db("task41")
    .collection("rooms")
    .insertMany(data);
}
 async function getBookedCustomerdata() {
  return await client
    .db("task41")
    .collection("rooms")
    .aggregate([{ $match: { bookedstatus: "confirmed" } }])
    .toArray();
}
async function getRoomById(id) {
  return await client
    .db("task41")
    .collection("rooms")
    .findOne({ id: id });
}
export{
 getBookedCustomerdata,
  getBookedRoomName, 
  createRoom, 
  getRoomById 
};