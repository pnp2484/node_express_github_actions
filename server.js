var express = require('express')

var app = express()
const fs = require('fs');
const SERVER_PORT = 3000
const SERVER_HOST = "localhost"

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

//http://localhost:3000/home
app.get('/', function (req, res) {
  res.send("<h1>Home Page</h1>")
})
//http://localhost:3000/home
app.get('/home', function (req, res) {
    res.send("<h1>Home Page</h1>")
})

//http://localhost:3000/name
app.get('/name', (req, res) => {
  res.send('<h1>C0879812 -Subodh Shah</h1>')
})

//http://localhost:3000/
app.get('/test', (req, res) => {
  fs.readFile('index.html', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading index.html:', err);
        res.status(500).send('Internal Server Error');
        return;
    }

    // Send the HTML content as the response
    res.send(data);
});
})


//http://localhost:3000/profile
app.post('/profile', (req, res) => {
  console.log(req.body)
  res.json(req.body)
})

//http://localhost:3000/admin
app.get('/admin', (req, res) => {
  res.send('Admin Homepage')
})

//http://localhost:3000/user/100
app.get("/user/:id", (req, res)=> {
      res.send(`User ID: ${req.params.id}`);
    }
)

//http://localhost:3000/valueofday/1980-01-24
app.get("/valueofday/:year(\\d{4})-:month(\\d{2})-:day(\\d{2})", (req, res) => {
  console.log(req.params)
  res.send(req.params)
});
  
app.listen(process.env.PORT  || SERVER_PORT, () => {
    console.log(`Server running at http://${SERVER_HOST}:${SERVER_PORT}/`);
})
