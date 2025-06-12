import { Sequelize,DataTypes } from "sequelize";
import userModel from "./models/userModel.js";

const sequelize=new Sequelize("postgresql://postgres.aunmwcpanukqqrnlyvwu:userproject123456789us@aws-0-ap-south-1.pooler.supabase.com:6543/postgres") // connection string

sequelize.authenticate()
.then(()=>{
    console.log("Authentication Successful!")
})
.catch((err)=>{
    console.log("Unexpected Error Occured",err)
})

const db={}
db.sequelize=sequelize
db.Sequelize=Sequelize

db.users=userModel(sequelize,DataTypes)

sequelize.sync({alter:false}).then(()=>{
    console.log("Migration Successful!")
})

export default db