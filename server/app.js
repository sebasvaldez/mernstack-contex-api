import  express  from "express";
import fileUpload from "express-fileupload"
import postsRoutes from "./routes/posts.routes.js"


const app = express()

// middlewares
app.use(express.json())

//necesario para subir archivos a mi servidor
app.use(fileUpload({
    useTempFiles:true,
    tempFileDir:'./upload'
}))

// routes
app.use(postsRoutes)


export default app