const {login} = require("../Controller/User.controller")
const express = require("express")
const userRouter = express.Router()

userRouter.get("/login",login)

module.exports = userRouter