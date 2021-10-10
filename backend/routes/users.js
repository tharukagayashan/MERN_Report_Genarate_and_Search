const router = require("express").Router();
const user = require("../models/User");

router.route("/insert").post((req,res)=>{

    let name = req.body.name;
    let age = req.body.age;
    let district = req.body.district;
    let description = req.body.description;

    const newUser = new user({
        name,age,district,description
    })

    newUser.save().then(()=>{
        res.json("Data Insert Successfully");
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/").get((req,res)=>{

    user.find().then((result)=>{
        res.json(result);
    }).catch((err)=>{
        console.log(err);
    })

})

router.get("/",(req,res)=>{
    user.find().exec((err,users)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingUsers:user
        })
    })
})

module.exports = router;