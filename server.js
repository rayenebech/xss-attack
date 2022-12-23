

const express = require('express');


const app = express();
var path = require('path');


const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname);

USER_ID = 'admin'
PASSWORD = '1234'

app.use(express.static(path.join(__dirname, "frontend")));


app.get('/',function(req,res) {
    res.sendFile(path.join(__dirname, "frontend/login.html"));
  });

 app.get('/search',function(req,res) {
    keyword = req.query.keyword
    res.render(path.join(__dirname, "frontend/login.html"), {keyword_result: keyword});
  });

/** 

**/

// compare data of the request to the data of the user
//http://127.0.0.1:8000/auth/login?user=admin&password=1234

app.get('/hacker', (req, res, next) => {
    res.sendFile(path.join(__dirname, "frontend/hacker.html"));
})

app.get('/login', (req, res, next) => {
    { 
    console.log(req.query.username)
    console.log(req.query.password)
    
    if (req.query.username === USER_ID && req.query.password === PASSWORD) {

        res.render(path.join(__dirname, "frontend/home.html"));

    } else {
        res.status(401).json({
            message: "Login Failed"
        })
        console.log("Login Failed")
    }}
    
})
  
// Require the Routes API  
// Create a Server and run it on the port 8000
const server = app.listen(8000, function () {
    let host = server.address().address
    let port = server.address().port
    // Starting the Server at the port 8000
    console.log("App listening at http://%s:%s", host, port)

})