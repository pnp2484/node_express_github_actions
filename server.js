var express = require('express')

var app = express()

const SERVER_PORT = 3000
const SERVER_HOST = "localhost"

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.static("views"))

//http://localhost:3000/
app.get('/jay', function (req, res) {
    res.send("./views/index.html")
})

//http://localhost:3000/profile
app.post('/profile', (req, res) => {
  console.log(req.body)
  res.json(req.body)
})

//http://localhost:3000/name
app.post('/name', (req, res) => {
  res.send("<h1>C0868053 - Jay Shah</h1>")
})

//http://localhost:3000/name
app.get('/name', (req, res) => {
  res.send("<h1>C0868053 - Jay Shah</h1>")
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
