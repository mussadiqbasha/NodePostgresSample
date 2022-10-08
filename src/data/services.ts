import { db } from './connection'

export const getProduct = async () => {
    return await db.query('SELECT * FROM public."Product" ORDER BY "price" ASC ')
}

export const checkOut = async (body: any) => {
    return await db.query(`INSERT INTO public."Product" 
                            (title, description, picture, price, quantity)
                                VALUES ($1, $2, $3, $4, $5)`, [body.title, body.description, body.picture, body.price, body.quantity])
}