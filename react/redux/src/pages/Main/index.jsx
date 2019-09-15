import React from 'react'

import { MdAddShoppingCart } from 'react-icons/md'
import { ProductList } from './styles'

import sneaker from '../../assets/images/sneaker.jpg'

function Main() {
  return (
    <ProductList>
      <li>
        <img src={sneaker} alt="sneaker" />
        <strong>Sneaker description</strong>
        <span>U$ 40,00</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADD TO CART</span>
        </button>
      </li>
    </ProductList>
  )
}

export default Main
