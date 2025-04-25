let express=require("express");
let route = express.Router();
let func = require("../Function/Logic")
route.post("/reg",func.register_user);

module.exports=route