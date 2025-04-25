let express=require("express");
let route=require("./Routing/Route");
let db =require("./Connect");
// let user = require("./Connection/User");
let cors=require("cors");
require("dotenv").config();

let port=process.env.PORT ||3000;
let app = express();
app.use(express.json());
app.use(cors());
app.use("/owaisassig/",route);

db().then(()=>{
    app.listen(port,()=>{
        console.log(`Server is running on port http://localhost:${port}/owaisassig`)
    })
}).catch((e)=>{
    console.log(e);
})