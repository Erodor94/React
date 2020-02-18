import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addCheckout } from '../../store/actions'

const AddCheckOut = ({ product, price, dispatch }) =>
    <button onClick={() => dispatch(addCheckout(product, price))}>
        Comprar
    </button>

AddCheckOut.propTypes = {
    product: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
}

export default connect()(AddCheckOut)