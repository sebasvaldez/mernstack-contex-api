import {v2 as cloudinary} from "cloudinary";


cloudinary.config({
    cloud_name:"milayrock",
    api_key:"859547165193923",
    api_secret:"eVyaKfWaoNbhaZefRGP5IiRMNqI"
})


export const uploadImage= async filePath  =>{
   await cloudinary.uploader.upload(filePath, {
        folder:"posts"
    })
}