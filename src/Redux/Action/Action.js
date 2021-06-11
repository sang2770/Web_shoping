import * as Type from '../Type/Type'

export const addToCart=(itemID)=>{
    return {
        type:Type.ADD_TO_CART,
        payload:{
            id:itemID
        }
    }
}
export const removeFromCart=(itemID)=>{
    return {
        type:Type.REMOVE_FROM_CART,
        payload:{
            id:itemID
        }
    }
}
export const qtyCart=(itemID, qty)=>{
    return {
        type:Type.ADJUST_ITEM_QTY,
        payload:{
            id:itemID,
            qty,
        }
    }
}
export const loadCurrentItem=(item)=>{
    return {
        type:Type.LOAD_CURRENT_ITEM,
        payload:item
    }
}
export const ResetCart=()=>{
    return {
        type:Type.RESET_CART,
        payload:""
    }
}