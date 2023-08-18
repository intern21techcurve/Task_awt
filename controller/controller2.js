const db1 = require('../models')
const login = require('../models/login')
const jwt = require('jsonwebtoken');

//create a login 

const log = async (req,resp) =>{
    let info1 = {
        email: req.body.Email,
        password: req.body.Password,
        login: req.body.Login ? req.body.SingnIn : false
    }
    const login = await login.create(info1)
    resp.status(200).send(login)
    console.log(login)
}
const secretKey = 'your_secret_key_here';

// get all login 
const getalllogininfo = async (req, resp) =>{
    let logins = await login.findAll({})
    resp.status(200).send(logins)
}

// Get all single info 
const getoneuser =async (req, resp) =>{
     let id = req.prams.id
     let logins = await login.findOne({where: {id:id}})
     resp.status(200).send(logins) 
}

// Update prameter

const updatelogin = async (req, resp) => 
{
    let id = req.prams.id
    const logins = await login.update(req.body, {where: {id:id}})
    resp.status(200).send(login)


}

// daleated login info by id
 const deletedlogin = async (req,resp) =>{
    let id = req.prams.id
    await login.destroy({ where: {id:id}})
    resp.status(200).send(login)
 
 } 

 // loging
 const sign_in = async (req, resp) => {
    try {
        const logins = await loginModel.findAll({ where: { Login: true } });

        if (logins.length === 0) {
            resp.status(401).send("No login found");
        } else {
            const user = logins[0]; // Assuming you want to generate token for the first found login
            const payload = {
                userId: user.id,
                email: user.email
            };
            const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });
            resp.status(200).json({ token });
        }
    } catch (error) {
        resp.status(500).send("Error while logging in: " + error.message);
    }
};

 module.exports={
    log,
    getalllogininfo,
    getoneuser,
    updatelogin,
    deletedlogin,
    sign_in

 }
 