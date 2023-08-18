module.exports = (Sequelize, DataTypes) =>{
    const login = Sequelize.define("login" ,{
        Email:{
            type: DataTypes.STRING,
            allowNull: false
        },
        Password:{
            type: DataTypes.STRING,
            allowNull: false
        },
        singIn:{
            type: DataTypes.BOOLEAN,
            allowNull: false
        }

    })
    return login
}