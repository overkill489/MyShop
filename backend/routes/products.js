import express from "express";
import { getAllProducts, getProductsById } from "../controllers/products.js";

const router = express.Router();

router.get("/", getAllProducts);

router.get("/:id", getProductsById);

export default router;
