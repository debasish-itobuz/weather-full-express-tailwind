import express from "express"
import cors from "cors"
import "dotenv/config"
import * as router from "./routes.js"

const app = express()

app.use(cors())
app.use(express.json())

app.use(router.app)

app.use((request, response, next)=>{
    response.status(404)
    next(new Error("Page not found"))
})

app.listen(process.env.PORT, ()=>{
    console.log("Server started...")
})
