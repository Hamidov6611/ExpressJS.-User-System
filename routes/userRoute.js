const { userGetController, userPostController, UserLoginPostController } = require("../controller/userRouteController")

const userRoute = require("express").Router()

userRoute.get("/", userGetController)
userRoute.post("/", userPostController)
userRoute.post("/login", UserLoginPostController)


module.exports = userRoute
