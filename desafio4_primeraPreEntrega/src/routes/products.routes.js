import { Router } from "express";
import productManager from "../managers/productManager.js"; //Importamos el productManager

const router = Router();
router.get("/", async (req, res) => { 
  try {
    const { limit } = req.query;
    const products = await productManager.getProducts(limit);

    res.status(200).json(products);
  } catch (error) {
    console.log(error);
  }
});

router.get("/:pid", async (req, res) => {
  try {
    const { pid } = req.params; // Todos los parámetros siempre vienen en formato string

    const product = await productManager.getProductById(parseInt(pid));

    res.status(200).json(product);
  } catch (error) {
    console.log(error);
  }
});


router.post("/", async (req, res) => { //Creamos la ruta del post y hacemos la funcion asincrona

  try {
    const product = req.body; //Dentro de la constante product, va a estar todo el cuerpo del "body" de lo que vamos a recibir de los productos

    const newProduct = await productManager.addProduct(product); 

    res.status(201).json(newProduct); //Ponemos de respuesta el nuevo producto que acabamos de crear
    
  } catch (error) {
    console.log(error);
  }
  
})

router.put("/:pid", async (req, res) => { //Recibe el product id

  try {
    const {pid} = req.params; // Va a tener el product id que se va a recibir de los parametros
    const product = req.body; //El body va a recibir el cuerpo de lo que se va a modificar, dentro del producto

    const updateProduct = await productManager.updateProduct(pid, product); //el updateProduct, toma como primer parametro el product id y como segundo parametro, la data del producto, que va a ser el product que recibimos por el body

    res.status(201).json(updateProduct);
    
  } catch (error) {
    console.log(error);
  }
  
})

router.delete("/:pid", async (req, res) => {

  try {
    const {pid} = req.params;

    await productManager.deleteProduct(pid);

    res.status(201).json({message: "Producto eliminado"}); //damos aviso al cliente que se elimino el producto
    
  } catch (error) {
    console.log(error);
  }
  
})

export default router;