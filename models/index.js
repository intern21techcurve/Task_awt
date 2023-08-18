const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config');
const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.dialect,
        opertorsAliases:false,
        
        pool:{
            max: config.pool.max,
            min: config.pool.min,
            acquire: config.pool.acquire,
            idle: config.pool.idle
        }
    }
)
sequelize.authenticate().then(() =>{
    console.log('connected')

})
.catch(err => {
    console.log("error" + err)

})
const db = {}
db.sequelize = sequelize
db.sequelize = sequelize
db.USER = require('./User')(sequelize,DataTypes)
db.login = require('./login')(sequelize,DataTypes)
db.sequelize.sync({force: false})
.then(() =>{
    console.log('Sync is done')

})
module.exports = db;