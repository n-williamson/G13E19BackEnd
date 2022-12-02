const Producto = require("../models/producto");
const categoria = require("../models/categoria");

exports.leerProducto = async ( req, res ) => {
    //res.json({msg: "se ejecuto leer producto"})

    try {
        const producto = await Producto.find({creador : req.usuario.id});
        res.json({producto});
    } catch (error) {
        console.log(error);
        
    }
}

exports.crearProducto = async ( req, res ) => {
const {categoria_1} = req.body;

    try {
        const categoriaEncontrada = await categoria.findById(categoria_1);
        if(!categoriaEncontrada){
            return res.status(404).json({msg: "categoria no encontrada"});
        }

        const producto = new Producto(req.body);

        producto.creador = req.usuario.id;

        producto.save();

        res.json(producto);
    } catch (error) {
        console.log(error);
    }
}

exports.actualizarProducto = async ( req, res ) => {
    const { id } = req.params;
    const producto = await Producto.findById(id);

    if (!producto){
        return res.status(400).json({ msg: "Producto no encontrado"});
    }

    producto.nombre = req.body.nombre || producto.nombre;
    producto.descripcion = req.body.descripcion || producto.descripcion;
    producto.stock = req.body.stock || producto.stock;
    producto.precio= req.body.precio || producto.precio;
    producto.imagen = req.body.imagen || producto.imagen;
    producto.save();
    res.json({producto});



}

exports.borrarProducto = async ( req, res ) => {
    res.json({msg: "se ejecuto borrar producto"})
}