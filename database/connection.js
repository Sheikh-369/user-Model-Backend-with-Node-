import { Sequelize,DataTypes } from "sequelize";

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

export default db