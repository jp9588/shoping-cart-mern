//importar el modelo para usarlo en la consulta hacia la base
//de datos

const Product= require('../models/Product');

//funcion para obtener todos los productos de la base de datos
const getAllProducts= async (req, res)=>{

    try {
        const products = await Product.find({});

        res.json(products);
        
    } catch (error) {

        console.log(error);
        res.status(500).json({message:'Server Error'});        
    }

   

}

//funcion para obtener un solo producto  de la base de datos en base al id
const getProduct= async (req, res)=>{

    try {
        const product = await Product.findById(req.params.id);

        res.json(product);
        
    } catch (error) {

        console.log(error);
        res.status(500).json({message:'Server Error'});        
    }

   

}

module.exports={
    getAllProducts,
    getProduct,
}
