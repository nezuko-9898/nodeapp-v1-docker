const express = require('express')
const app = express()

app.get('/', (req,res)=>{
  res.send("🚀 Node App Running inside MR Hello Docker + MR Hello Jenkins")
})

app.listen(3000, ()=>{
  console.log("Server running on port 3000")
})