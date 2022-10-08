import express from 'express';
import controller from '../controllers/product';
const router = express.Router();

router.get('/product', controller.getProducts);
router.post('/checkout', controller.addProduct);

export = router;