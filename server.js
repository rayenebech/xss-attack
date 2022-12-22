

const express = require('express');


const app = express();
var path = require('path');


const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));


USER_ID = 'admin'
PASSWORD = '1234'

app.use(express.static(path.join(__dirname, "frontend")));


app.get('/',function(req,res) {
    res.sendFile('/Users/rayenebech/Desktop/rayene/ytu/fall_2022/Security_of_Computer_Systems/project/frontend/login.html');
  });

/** 

**/

// compare data of the request to the data of the user
//http://127.0.0.1:8000/auth/login?user=admin&password=1234
app.get('/auth/login', (req, res, next) => {
    {  if (req.query.user === USER_ID && req.query.password === PASSWORD) {
        res.status(200).json({
            message: "Login Successful"
        })
        console.log("Login Successful")
    } else {
        res.status(401).json({
            message: "Login Failed"
        })
        console.log("Login Failed")
    }}
    
})
  
// Require the Routes API  
// Create a Server and run it on the port 3000
const server = app.listen(8000, function () {
    let host = server.address().address
    let port = server.address().port
    // Starting the Server at the port 3000
    console.log("App listening at http://%s:%s", host, port)

})