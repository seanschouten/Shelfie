import React, { Component } from 'react'

export default class Form extends Component {
    constructor(){
        super()

        this.state = [{
            productName: '',
            price: '',
            imageUrl: ''
        }]
    }

    handleProductNameChange(product) {
        this.setState({ productName: product })
    };

    handlePriceChange(priceChange) {
        this.setState({ price: priceChange })
    };

    handleImageUrl(picture) {
        this.setState({ })
    };

    handleAdd() {
        this.setState({

        })
    }

    render() {
        return(
            <div>
                <div>
                    <input 
                        value={this.state.imageUrl}
                        placeholder="Image"/>
                </div>
                <div>
                    <input
                        value={this.state.productName} 
                        onChange={e => this.handleProductNameChange(e.target.value)} 
                        placeholder="Product Name"/>
                </div>
                <div>
                    <input 
                        value={this.state.price}
                        onChange={e => this.handlePriceChange(e.target.value)} 
                        placeholder="Price"/>
                </div>
                <button>Add to Inventory</button>
                <button>Cancel</button>
            </div>
        )
    }
}