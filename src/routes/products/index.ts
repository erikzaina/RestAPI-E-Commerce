import { Router } from 'express';

const router = Router();

router.get('/', (req,res) => {
    res.send("the list of the products")
})

router.post('/', (req,res) => {
    res.send(`new product created: ${req.params}`)
})

router.get('/:id', (req,res) => {
    res.send(`a product ${req.params}`)
})

export default router;