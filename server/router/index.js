const express = require("express")
const apiRoute = require("./api")
const router = express.Router()

router.use(process.env.VERSION_API, apiRoute)

router.use("/", (req,res)=>{
    res.send("Hello! Welcome To The Server 🙂")
})

router.use("*", (req,res)=>{
    res.status(404).send("Page Not Found")
})

module.exports = router