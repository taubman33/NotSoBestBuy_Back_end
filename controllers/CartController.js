const req = require('express/lib/request')
const { Cart } = require('../models')

const GetCartProducts = async (req,res) =>{
    try{
        const items = await Cart.findAll({where: {user_id: req.params.cart_id}})
        res.send(items)
    } catch (error){
        throw error
    }
}

const AddToCart = async (req,res) =>{ 
    try{
        productBody = {
            ...req.body
        }
        newItem = await Cart.create(productBody)
        res.send(newItem)
    } catch (error) {
        throw error
    }
} 

const RemoveFromCart = async (req,res) =>{
    try{
        await Cart.destroy({where: {id: req.params.cart_id}})
        res.send({msg: "Item removed from cart", payload: req.params.cart_id, status:"Ok"})
    } catch (error){
        throw error
    }
}

module.exports = {
    GetCartProducts,
    AddToCart,
    RemoveFromCart
}