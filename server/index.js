import  express  from "express";
import postsRoutes from "./routes/posts.routes.js"
import { connectDB } from "./db.js";
import {PORT} from "./config.js"
const app = express()

connectDB()

app.listen(PORT)
app.use(postsRoutes)

console.log("Escuchando en el puerto "+PORT)