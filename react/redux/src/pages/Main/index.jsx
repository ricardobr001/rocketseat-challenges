import React, { Component } from 'react'

import { MdAddShoppingCart } from 'react-icons/md'
import api from '../../services/api'
import { formatPrice } from '../../util/format'

import { ProductList } from './styles'

export default class Main extends Component {
  constructor() {
    super()
    this.state = {
      products: []
    }
  }

  async componentDidMount() {
    const res = await api.get('/products')

    const data = res.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price)
    }))

    this.setState({ products: data })
  }

  render() {
    const { products } = this.state

    return (
      <ProductList>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.id} />
            <strong>{product.title}</strong>
            <span>U$ {product.priceFormatted}</span>
            <button type="button">
              <div>
                <MdAddShoppingCart size={16} color="#fff" /> 3
              </div>

              <span>ADICIONAR AO CARRINHO</span>
            </button>
          </li>
        ))}
      </ProductList>
    )
  }
}
