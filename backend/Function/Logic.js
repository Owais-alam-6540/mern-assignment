let user=require("../Connection/User")
let main_func={
    register_user:async function(req,res){
        try {
            let user_data=new user(req.body);
            let create=await user_data.save();
            res.status(200).jason({msg:"User Created Successfully"})

        } catch (error) {
            res.status(501).jason({msg:error.message})
        }
    }
}

module.exports=main_func