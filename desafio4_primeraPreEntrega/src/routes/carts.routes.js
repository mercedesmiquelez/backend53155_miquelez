import { Router } from "express";
import cartManager from "../managers/cartManager.js";

const router = Router();

//Creo el endpoint de post: este post va a generar automaticamente nuestro carrito
router.post("/", async (req, res) => {
  try {
    const cart = await cartManager.createCart();

    res.status(201).json(cart);
  } catch (error) {
    console.log(error);
  }
});

router.post("/:cid/product/:pid ", async (req, res) => {
  try {
    const {cid, pid} = req.params; //Obtengo 2 parametros
    const cart = await cartManager.addProductToCart(cid, pid)

    res.status(201).json(cart); //status 201 indicando que se creo algo
  } catch (error) {
    console.log(error);
  }
});

router.get("/:cid", async (req, res) => {
  try {
    const {cid} = req.params;
    const cart = await cartManager.getCartById(cid);

    res.status(200).json(cart); //status 200 indicando que salio todo ok
  } catch (error) {
    console.log(error);
  }
});

export default router;