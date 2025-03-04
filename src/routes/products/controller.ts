import { Request,Response } from "express"

export function listProducts(req:Request,res:Response) {
    res.send(`list of products: ${req.params}`)
}

export function getProductByID(req:Request,res:Response) {
    res.send(`product by id: ${req.params}`)
}

export function createProduct(req:Request,res:Response) {
    res.send(`new product created: ${req.params}`)
}

export function updateProductByID(req:Request,res:Response) {
    res.send(`product updated: ${req.params}`)
}

export function deleteProductByID(req:Request,res:Response) {
    res.send(`product deleted: ${req.params}`)
}

