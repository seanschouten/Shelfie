import React, { Component } from 'react'
import Product from '../Product/Product'
import Axios from 'axios';

export default class Dashboard extends Component {
   
    render() {
        return(
            <div>Dashboard
                <Product />
            </div>
            
        )
    }
}