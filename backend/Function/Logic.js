let user=require("../Connection/User")
let main_func={
    register_user:async function(req,res){
        try {
            let {name,age,gender,phone,address}=req.body;
            let check_phone=await user.findout({phone:phone});
            if (check_phone) {
               return res.status(409).jason({msg:"Phone No Already Exist"})     
            } else {
                let user_data=new user({name,age,gender,phone,address})
                let create=await user_data.save();
                res.status(200).jason({msg:"User Created Successfully",data:create})   
            }

        } catch (error) {
            res.status(501).jason({msg:error.message})
        }
    }
}

module.exports=main_func