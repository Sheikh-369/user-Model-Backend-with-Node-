import db from "../database/connection.js"
const User=db.users

const fetchUsers=async(req,res)=>{
    const datas=await User.findAll()
    res.json({
        message:"Users fetched Successfully!",
        datas
    })
}

const createUser=async (req,res)=>{
    const {userName,userAge,userAddress,userImage}=req.body
    await User.create({
        userName,
        userAge,
        userAddress,
        userImage})
        res.json({
            message:"User Created Successfully!"
        })
}

const fetchSingleUser=async(req,res)=>{
    const id=req.params.id
    const datas=await User.findByPk(id)
    res.json({
        message:"Single User fetched Successfully!",
        datas
    })
}

const deleteUser=async (req,res)=>{
    const id=req.params.id
    await User.destroy({
        where:{
            id
        }
        
    })
    res.json({
        message:"User Deleted Successfully!"
    })
}


export {fetchUsers,createUser,fetchSingleUser,deleteUser}