
import {Productdata, Customer} from './Data'

import * as Type from '../Type/Type'
const INITIALSTATE={
    customer:Customer,
    product:Productdata,
    cart:[],
    currentItem:null
}
const shopReducer=(state=INITIALSTATE, action)=>
{
    switch (action.type) {
        case Type.ADD_TO_CART:
            // Search product from list
            const id=action.payload.id;
            const itemProduct=state.product.find((item, index)=>{
                return item.id===id;
            })
            // Check item exist in cart
            const check=state.cart.find((item)=>{
                return item.id===id?true:false
            })
            return {
                ...state,
                cart:check?(
                    state.cart.map((item)=>{
                        return item.id===id?{...item, qty:item.qty+1}:item;
                    })
                ):(
                    [...state.cart,{...itemProduct, qty:1}]
                )
            };
        case Type.REMOVE_FROM_CART:
            return {
                ...state,
                cart:state.cart.filter((item)=>{
                    return item.id!==action.payload.id;
                })
            };
        case Type.ADJUST_ITEM_QTY:
            return {
                ...state,
                cart:state.cart.map(item=>{
                    return item.id===action.payload.id?{...item, qty:action.payload.qty}:item
                })
            };
        case Type.LOAD_CURRENT_ITEM:
            return {
                ...state,
                currentItem:action.payload
            };
        case Type.RESET_CART:
            // const Test=state.cart.splice(0, state.cart.length);
            return {
                ...state,
                cart:state.cart.filter(item=>{return item===0})
            };
        default:
            return state;
    }
}
export default shopReducer;