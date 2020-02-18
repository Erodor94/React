import React from 'react'
import PropTypes from 'prop-types'

const Currency = ({ value }) =>
    <span className="currency">
        R$ {value.toFixed(2)}
    </span>

Currency.propTypes = {
    value: PropTypes.number.isRequired
}

export default Currency