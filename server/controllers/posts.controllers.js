export const getPosts = (req, res) => res.send("Hello world");

export const createPost = (req, res) =>
  res.send("esta ruta es para crear publicaciones");

export const updatePost = (req, res) =>
  res.send("esta ruta es para actualizar un post");

export const deletePost = (req, res) =>
  res.send("esta ruta es para borrar un post");

export const getPost = (req, res) =>
  res.send("Esta ruta devuelve 1 sola publicacion a travez de su id!");
