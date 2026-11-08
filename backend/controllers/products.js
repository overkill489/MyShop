import getProducts from "../services/fakeStore.js";

export async function getAllProducts(req, res, next) {
  try {
    const products = await getProducts();
    res.json(products);
  } catch (err) {
    next(err);
  }
}

export async function getProductsById(req, res, next) {
  try {
    const products = await getProducts();
    const productId = Number(req.params.id)
    const product = products.find((p) => p.id === req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (err) {
    next(err);
  }
}
