import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Header extends Component {
  componentDidMount(){
    this.setState({
      currency: 'P'
    })
  }
  render() {
    return (
      
        <nav className="navbar navbar-expand-md navbar-dark sticky-top bg-info">
         
          <Link className="navbar-brand" to="/">LOGO</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item text-white">
                <Link to="/products" className="nav-link">
                  Products
                </Link>
              </li>
              <li className="nav-item text-white">
                <Link to="/categories" className="nav-link">
                  Categories
                </Link>
              </li>
              <li className="nav-item text-white">
                <Link to="/on-sale" className="nav-link">
                  On sale
                </Link>
              </li>
            </ul>
            <form className="form-inline mt-2 mt-md-0">
              <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
              <button className="btn btn-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          
          </div>
        </nav>
      
    )
  }
}

const mapStateToProps = state => {
  return {
    currency: state.currency
  }
}

export default connect(mapStateToProps)(Header)
