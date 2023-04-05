const { userGetController, homeGetController } = require("../controller/homeRouteController")
const AuthMiddleWare = require("../middlewares/AuthMiddleWare")

const homeRoute = require("express").Router()

homeRoute.use(AuthMiddleWare)

homeRoute.get("/", homeGetController)

module.exports = homeRoute