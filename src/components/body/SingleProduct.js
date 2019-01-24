import React, { Component } from 'react'

export class SingleProduct extends Component {

  componentDidMount(){
 
  }

  passDetails = (item) => {
    console.log(item)
    
  }

  RenderPhones = () => {
    const products = this.props.products
    
    return products.map(items => {
      return(
      items.map(item => {
        // console.log(item)
        return (
          <div key={item.productId} className="" onClick={() => this.passDetails(item)}>
            {item.productName}
          </div>
          
        )
        
      })
      )
      
    })
    
  }

  render() {
    return (
      <div className="">
        {this.RenderPhones()}
      </div>
    )
  }
}

export default SingleProduct
