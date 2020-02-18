import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () =>
    <header>
        <h1>e-Commerce</h1>
        <Link to="/produtos/novo">
            <button className="new-product">Novo Produto</button>
        </Link>
    </header>

export default Header