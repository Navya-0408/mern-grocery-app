const controller=require("../controllers/adminController")
const express=require("express")

const routers=express.Router()
routers.post("/admin-register",controller.adminRegister)
routers.post("/admin-login",controller.adminLogin)
module.exports= routers