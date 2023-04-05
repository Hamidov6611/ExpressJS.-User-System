
const express = require("express")
const homeRoute = require("./routes/homeRoute")
const userRoute = require("./routes/userRoute")

const app = express()

app.listen(5000, () => {
    console.log("Server is running on port 5000...")
    })

app.use(express.urlencoded({extended:true}))
app.use(express.json())
// app.use("/index",function (request, response) {
//     response.redirect("https://metanit.com")
//   });

app.use("/users", userRoute)
app.use("/",homeRoute)

