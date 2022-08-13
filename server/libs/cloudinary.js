import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "milayrock",
  api_key: "859547165193923",
  api_secret: "eVyaKfWaoNbhaZefRGP5IiRMNqI",
});

//funcion para subir imagenes a cloudinary

export const uploadImage = async (filePath) => {
 return await cloudinary.uploader.upload(filePath, {
    folder: "posts",
  });
};

// funcion para borrar las imagenes de cloudinary

export const deleteImage = async (id)=>{

  return  await cloudinary.uploader.destroy(id)

}