import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './ProductForm.css'
import Api from '../../services/api'

const ProductForm =() =>{
    const [ name, setName ] = useState('')
    const [ description, setDescription ] = useState('')
    const [ price, setPrice ] = useState(0)
    const [ imageUrl, setImage] = useState('') 

    const history = useHistory()

    const saveProduct = async (event) => {
        event.preventDefault()

        const api = new Api()

        const newProduct = {
            title: name,
            price: Number(price),
            description,
            imageUrl: imageUrl
        }

        await api.post('http://localhost:3001/api/products', newProduct)
        history.push('/')

    }

    return <section className="form">
        <Link to="/">
            <button>Voltar</button>
        </Link>
        <form>
            <h1>Novo Produto</h1>

            <div className="row">
                <label>Nome do Prooduto</label>
                <input type="text"
                        value={name}
                        onChange={(evt) => setName(evt.target.value)} />
            </div>
            
            <div className="row">
                <label>Preço</label>
                <input type="text"
                        value={price}
                        onChange={(evt) => setPrice(evt.target.value)} />
            </div>

            <div className="row">
                <label>Descrição</label>
                <textarea cols="30" rows="10"
                        value={description}
                        onChange={(evt) => setDescription(evt.target.value)}>
                        </textarea>
            </div>

            <div className="row">
                <label>Imagem</label>
                <input type="text"
                        value={imageUrl}
                        onChange={(evt) => setImage(evt.target.value)} />
            </div>


            <button onClick={saveProduct}>Salvar</button>
        </form>
    </section>
}

export default ProductForm