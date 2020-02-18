import React from 'react'
import CheckoutProductList from '../checkout-product-list/CheckoutProductList'
import './Checkout.css'
import Currency from '../currency/Currency'
import { connect } from 'react-redux'
import { clearCheckout } from '../../store/actions'

const Checkout = ({ checkout, dispatch }) => {
    if (!checkout) {
        return null
    }

    return <aside className="checkout">
        <h1>Lista de Produtos</h1>

        <CheckoutProductList items={checkout.products} />

        <div className="total">
            <Currency value={checkout.products.reduce((total, product) => {
                return total + product.price
            }, 0)} />
        </div>

        <div className="actions">
            <button onClick = {() => dispatch(clearCheckout())}
            >Cancelar a compra</button>
        </div>
        
    </aside>
}

const mapStateToProps = ({ checkout }) => ({ checkout })

export default connect(mapStateToProps)(Checkout)  
