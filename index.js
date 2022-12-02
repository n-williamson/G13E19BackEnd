const express = require("express");
const conectarDB = require("./config/db.js");
//const usuario = require("./models/usuario.js");
const usuarioRouters = require("./routers/usuarioRouters");
const authRouters = require("./routers/authRouters");
const categoriaRouters = require("./routers/categoriaRouters");
const productoRouters = require("./routers/productoRouters");
// conectar a la base de datos 
conectarDB();


const app = express();

//habilitar express.json

app.use(express.json({ extended : true }));

//rutas o routers
app.use("/api/usuarios" , usuarioRouters);
app.use("/api/auth" , authRouters);
app.use("/api/categoria" , categoriaRouters);
app.use("/api/producto" , productoRouters);

app.listen(4000, () => {

    console.log("servidor corriendo en el puerto 4000");
});


