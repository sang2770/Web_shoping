import React, {useState} from 'react'
import {connect} from 'react-redux'
import {qtyCart} from '../../Redux/Action/Action'
function CartItem({item, Qty,Delete}) {
    const [input, setinput] = useState(item.qty);
    const Change=(e)=>{
        setinput(e.target.value);
        const qty=e.target.value===""?0:parseInt(e.target.value)
        Qty(item.id,qty);
    }
    return (
            <tr>
                <td className="Inf_Product">
                    <img src={item.image} alt="ImgProduct" />
                        <h1>{item.name}</h1>
                </td>
                <td className="Cart_price">${item.sale}</td>
                <td ><input type="text" value={input} onChange={Change} className="Cart_quantity"/></td>
                <td className="Cart_Total">${item.sale*item.qty}  </td>
                <td><span className="Delete_Item" onClick={()=>Delete(item.id)}>Delete</span></td>
            </tr>
    )
}
const mapDispatchToProps=(dispatch)=>{
    return {
        Qty:(itemID, value)=>dispatch(qtyCart(itemID, value))
    }
}
export default connect(null,mapDispatchToProps)(CartItem)
