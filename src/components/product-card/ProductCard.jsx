import React from 'react'
import { Link } from 'react-router-dom'
import './ProductCard.css'
import AddCheckOut from '../add-checkout/AddCheckout'
import Currency from '../currency/Currency'
import PropTypes  from 'prop-types'

const ProductCard = ({ id, name, price, image, handleRemoveProducts}) =>
<article className="product-card">
    <img src={image} alt="" />
    <div className="title">{name}</div>
    <div className="price">
        <Currency value={price} />
    </div>

    <AddCheckOut product={name}
                    price={price} />

    <Link to={`/detalhes/${id}`}>+ detalhes</Link>

    <button onClick={() => handleRemoveProducts(id)}>Remover</button>

</article>

ProductCard.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    handleRemoveProducts: PropTypes.func.isRequired
}

export default ProductCard