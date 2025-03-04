import { Router } from 'express';
import { listProducts, getProductByID, createProduct, updateProductByID, deleteProductByID } from './controller';

const router = Router();

router.get('/', listProducts)

router.get('/:id',getProductByID )

router.post('/', createProduct)

router.put('/:id',updateProductByID)

router.delete('/:id',deleteProductByID)

export default router;