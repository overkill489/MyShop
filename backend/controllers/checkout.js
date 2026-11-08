import { createCheckoutSession } from "../services/stripe.js";

export async function checkout(req, res, next) {
  try {
    const session = await createCheckoutSession(req.body.items);
    res.json({ url: session.url });
  } catch (err) {
    next(err);
  }
}
