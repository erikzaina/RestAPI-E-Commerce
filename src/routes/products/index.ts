import { Router } from 'express';
import { listProducts, getProductByID, createProduct, updateProductByID, deleteProductByID } from './controller';
import { validateData } from '../../middlewares/validationMiddleWare';
import {createInsertSchema} from 'drizzle-zod'
import { productsTable } from '../../db/productsSchema';



export const createProductSchema = createInsertSchema(productsTable).omit(
   {id: true as never}
);


const router = Router();

router.get('/', listProducts)

router.get('/:id',getProductByID )

router.post('/',validateData(createProductSchema),createProduct)

router.put('/:id',validateData(createProductSchema),updateProductByID)

router.delete('/:id',deleteProductByID)

export default router;