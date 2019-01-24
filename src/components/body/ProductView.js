import React, { Component } from 'react'
import { fetchPhones, fetchCart, fetchCurrency } from '../../actions/productActions'
import { connect } from 'react-redux'
import { Link , Route} from 'react-router-dom'
import SingleProduct from './SingleProduct';
import MyShop from './MyShop';

class ProductView extends Component {
 
  componentDidMount() { 
    this.props.fetchPhones()
    this.props.fetchCart()
    this.props.fetchCurrency()
   
    // console.log(typeof(this.props.products))
    
  }

  RenderView = (match) => {
    const products = this.props.products
    return (
      <div>
      <Route
        path={`${match.url}/detail`}
        render={(props) => <SingleProduct products={products} />}
      />
      <Route
        path={`${match.url}/all`}
        render={(props) => <MyShop />}
      />
      </div>
    )
  }

  productView = (match) => {

    return (
      <React.Fragment>
        {this.RenderView(match)}
      </React.Fragment>
    )
  }

  
  render() {
    const match = this.props.match
    return (
      <div className="px-3">
        <div className="column py-2 my-1">
      
            {this.productView(match)}
            <Link to={`${match.url}/detail`}>Detail</Link>
            <Link to={`${match.url}/all`}>All products</Link>

        </div>
      </div>
    )
  }
}



const mapStateToProps = state => {
  return {
    products: state.products,
    cart: state.cart,
    currency: state.currency
  }
  
}

export default connect(mapStateToProps, { fetchPhones, fetchCart, fetchCurrency })(ProductView)

