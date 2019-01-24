import React, { Component } from 'react'
import MyShop from './body/MyShop'
import ProductView from './body/ProductView'
import Categories from './body/Categories'
import { Route } from 'react-router-dom'


class Body extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={MyShop} />
        <Route path="/products" component={ProductView} />
        <Route path="/categories" component={Categories} />
      </div>
    )
  }
}

export default Body
