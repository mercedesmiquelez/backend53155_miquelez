import express, { response } from "express"; // se importa el módulo de express para crear el servidor
import router from "./routes/index.js"

//Creamos una aplicacion de express
const app = express();

//Para configurar el servidor con determinadas funcionalidades se aplican los middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Para configurar la rura principal
app.use("/api", router); //Se pone el prefijo api para que todas las rutas inicien con este prefijo

//Inicializo el servidor en el puerto
app.listen(8080, () => {
  console.log("Escuchando el servidor en el puerto 8080");
});