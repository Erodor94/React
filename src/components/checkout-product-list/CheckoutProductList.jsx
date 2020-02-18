import React from'react'
import PropTypes from 'prop-types'
import Currency from '../currency/Currency'
import './CheckoutProductList.css'

const CheckoutProductList = ({ items }) =>
    <ul className="checkout-product-list">
        {items.map((product, index) => {
            return <li key = {index}>
                <span className="product">{product.product}</span>
                <span className="price">
                    <Currency value={product.price} />
                </span>
            </li>
        })}
    </ul>

CheckoutProductList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        product: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }).isRequired).isRequired
}

export default CheckoutProductList