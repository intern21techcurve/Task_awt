const express = require('express');
const app = express();
const route = require('./Routes/routes')
const loginRoutes = require('./Routes/login_routes');
port = 8000;

app.use('/api',route)
app.use('/login', loginRoutes);


app.get('/',(req,resp) => {
    resp.send({
        result: "Hii I am ready to work with u can u ready to work with me"

    })
})

app.listen(port,() =>{
    console.log("App is running on 8000")
})