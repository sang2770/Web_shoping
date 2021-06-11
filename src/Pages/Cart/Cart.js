import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import SectionTitle from '../../component/Section_title/SectionTitle'
import './Cart.css'
import CartItem from './CartItem'
import {ResetCart, removeFromCart} from '../../Redux/Action/Action'
function Cart({cart, ResetCart, removeFromCart}) {
    const [CartTotal, setCartTotal] = useState(0)
    const [ship, setship] = useState(0)
    useEffect(() => {
        let count=0;
        cart.forEach((item)=>{
            count+=item.sale*item.qty;
        })
        setCartTotal(count);
    }, [cart])
    const Change=(e)=>{
        console.log(typeof e.target.value)
        setship(parseInt(e.target.value));
    }
    const Reset=()=>{
       let a=window.confirm("You want pay, Really!")
       if(a)
       {
           ResetCart();
       }
    }
    return (
        <div className="Cart">
        <SectionTitle nameSection="Cart"/>
        <table className="Cart_list_product" >
            <tbody>
                <tr>
                    <th className="Name_Product_Cart">Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
                {  cart.length===0?<tr><td className="Empty" colSpan={4}>Cart Empty</td></tr>:(
                    cart.map((item)=>{
                        return (
                           <CartItem item={item} key={item.id} Delete={removeFromCart}/> 
                        )
                    }))
                }
            </tbody>
                
            </table>
        <div className="Cart_subtotal">
            <div className="subtotal">
                <h1 className="Subtotal_title">Subtotal</h1>
                <p>${CartTotal+ship}</p>
            </div>
            <div className="Shipping">
                <h1 className="Shipping_title">Shipping</h1>
                <ul className="ShipList">
                    <li className="ListItemShip">Flat Rate : $5.00<input type="radio"  name="Price_ship" value={5} onChange={Change}/></li>
                    <li className="ListItemShip">Free Shipping<input type="radio" name="Price_ship" value={0} onChange={Change} /></li>
                    <li className="ListItemShip">Flat Rate : $10.00<input type="radio" name="Price_ship" value={10}  onChange={Change}/></li>
                    <li className="ListItemShip">Local Delivery : $2.00<input type="radio"  name="Price_ship" value={2} onChange={Change}/></li>
                </ul>
            </div>
            <div className="button_container">
                <button className=" Cart_pay" onClick={()=>{Reset()}}>Buy Now</button>
            </div>
            
        </div>
            </div>
    )
}
const mapStateToProps=(state)=>{
    return {
        cart:state.shop.cart
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        ResetCart:()=>dispatch(ResetCart()),
        removeFromCart:(id)=>{dispatch(removeFromCart(id))}
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (Cart)
