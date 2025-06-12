import db from "../database/connection.js"
const User=db.users

const fetchUsers=async(req,res)=>{
    const datas=await User.findAll()
    res.json({
        message:"Users fetched Successfully!",
        datas
    })
}

export default fetchUsers