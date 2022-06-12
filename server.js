const express = require('express')

const app = express()



app.use('/',(req,res) => {
  res.send('Hello from nodejs app11')
})

app.listen(3000,() => {
  console.log("server running")
})