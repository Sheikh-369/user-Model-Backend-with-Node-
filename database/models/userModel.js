const userModel=(sequelize,DataTypes)=>{
    const User=sequelize.define("user",{
        userName:{
            type:DataTypes.STRING,
            allowNull:false
        },

        userAge:{
            type:DataTypes.INTEGER,
            allowNull:false
        },

        userAddress:{
            type:DataTypes.STRING,
            allowNull:false
        },

        userImage:{
            type:DataTypes.STRING,
            allowNull:true
        }
    })
    return User
}

export default userModel