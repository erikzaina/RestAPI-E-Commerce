import { Router } from 'express';
import { listProducts, getProductByID, createProduct, updateProductByID, deleteProductByID } from './controller';
import { validateData } from '../../middlewares/validationMiddleWare';
import { createProductSchema } from "../../db/productsSchema"






const router = Router();

router.get('/', listProducts)

router.get('/:id',getProductByID )

router.post('/',validateData(createProductSchema),createProduct)

router.put('/:id',validateData(createProductSchema),updateProductByID)

router.delete('/:id',deleteProductByID)

export default router;