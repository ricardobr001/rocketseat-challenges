import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'

import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete
} from 'react-icons/md'
import * as CartActions from '../../store/modules/cart/actions'

import { Container, ProductTable, Total } from './styles'

function Cart({ cart, removeFromCart, updateAmount }) {
  function increment(product) {
    updateAmount(product.id, product.amount + 1)
  }

  function decrement(product) {
    updateAmount(product.id, product.amount - 1)
  }

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUCT</th>
            <th>QUANTITY</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {cart.map(product => (
            <tr>
              <td>
                <img src={product.image} alt={product.id} />
              </td>
              <td>
                <strong>{product.title}</strong>
                <span>{product.priceFormatted}</span>
              </td>
              <td>
                <div>
                  <button type="button" onClick={() => decrement(product)}>
                    <MdRemoveCircleOutline size={20} color="#7159c1" />
                  </button>
                  <input type="number" readOnly value={product.amount} />
                  <button type="button" onClick={() => increment(product)}>
                    <MdAddCircleOutline size={20} color="#7159c1" />
                  </button>
                </div>
              </td>
              <td>
                <strong>U$ 80,00</strong>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => removeFromCart(product.id)}
                >
                  <MdDelete size={20} color="#7159c1" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>
      <footer>
        <button type="button">Finalize order</button>

        <Total>
          <span>TOTAL</span>
          <strong>U$ 80,00</strong>
        </Total>
      </footer>
    </Container>
  )
}

Cart.propTypes = {
  cart: PropTypes.arrayOf([
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      price: PropTypes.number,
      image: PropTypes.string,
      priceFormatted: PropTypes.string
    })
  ]).isRequired,
  updateAmount: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  cart: state.cart
})

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart)
