const User = require("../Models/userModel")


const home = async (req,res)=>{
    try {
        res.status(200).send("hello from home page")
      
    } catch (error) {
     
    }
}


// register router
const registerUser = async( req,res,next)=>{

    const {name,email,password,mobile} = req.body
   
   
    if(!name || !email || !password ||!mobile){
    return  res.status(400).json("All fields are required")
    }

try {
     const isExisted = await User.findOne({email})  
    if(isExisted){
       return res.status(400).json({message:"email already existed!!"})
    }
    }catch(error){
        next(error)
    }

    let newUser
    try{
        newUser = await User.create({
            name,
            email,
            password,
            mobile
        })
        res.status(201).json({message:"User created successfully",
            token: await newUser.generateToken() ,
        userId: newUser._id.toString(), })
  
          
    }catch(error){
        next(error)
    }
  
     
    }



// Login router
const loginUser = async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        const userExisted = await User.findOne({ email });

        if (!userExisted || !(await userExisted.comparePassword(password))) {
            return res.status(401).json({ message: "Invalid email or password!" });
        }

        const token = await userExisted.generateToken();
        
        res.status(200).json({
            message: "Login successful",
            token,
            userId: userExisted._id.toString(),
            isAdmin:userExisted.isAdmin
        });
    } catch (error) {
        next(error);
    }
};




module.exports = {home, registerUser, loginUser};