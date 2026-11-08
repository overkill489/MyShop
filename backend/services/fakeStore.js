import axios from "axios"

export default async function getProducts(){
    const res = await axios.get("https://fakestoreapi.com/products");

    return res.data.map((p) => ({
        id: `fake_${p.id}`,
        name: p.title,
        price: p.price,
        image: p.image,
        category: p.category,
        currency: "USD"
    }))
}