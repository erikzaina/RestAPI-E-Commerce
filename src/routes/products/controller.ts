import { Request,Response } from "express"
import { db } from "../../db/index"
import { productsTable } from "../../db/productsSchema"
import { except } from "drizzle-orm/gel-core"
import { eq } from "drizzle-orm"
import _  from 'lodash'
import { createProductSchema } from "../../db/productsSchema"

export async function listProducts(req:Request,res:Response) {
    try {
        const products = await db.select().from(productsTable)
        res.status(201).json(products)
    } catch (e) {
        res.status(500).send(e)
    }
}

export async function getProductByID(req:Request,res:Response) {
    try {
        const { id } = req.params
        const [product] = await db
        .select()
        .from(productsTable)
        .where(eq(productsTable.id, Number(id)))
        if (!product) {
            res.status(404).send({message: "Product not found"})
        } else {
            res.json(product)
        }
            

    } catch (e) {
        res.status(500).send(e)
    }
}

export async function createProduct(req:Request,res:Response) {
    try {
        const data = createProductSchema.parse(req.body);
        const [product] = await db.insert(productsTable).values(data).returning()
        res.status(201).json(product)
    } catch (e)
    {
        res.status(500).send(e)
    }
    
}

export async function updateProductByID(req:Request,res:Response) {
    try {
        const { id } = req.params
        const data = createProductSchema.parse(req.body);
        const [updatedProduct] = await db
            .update(productsTable)
            .set(data)
            .where(eq(productsTable.id, Number(id)))
            .returning()
            
        if (updatedProduct) {
            res.json(updatedProduct)
        } else {
            res.status(404).send(`Produto de id ${id} não encontrado`)
        }

    } catch (e) {
        res.status(500).send(e)
    }
}

export async function deleteProductByID(req:Request,res:Response) {
    try {
        const { id } = req.params
        const [deletedProduct] = await db.delete(productsTable).where(eq(productsTable.id, Number(id))).returning()
        
        if (deletedProduct) {
            res.status(204).send(`Produto de id ${id} deletado`)
        } else {
            res.status(404).send(`Produto de id ${id} não encontrado`)
        }

        
    } catch (e) {
        res.status(500).send(e)
    }
}

