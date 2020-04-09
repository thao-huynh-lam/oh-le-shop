import React, { Component } from 'react';
import util from '../util'
export default class Products extends Component {

    render() {
        const productItems = this.props.products.map(product => (
            <div className="col-md-3" key={product.id}>
                <div className="thumbnail text-center">
                    
                        <img src={`products/${product.sku}_2.jpg`} alt={product.title} />
                        <p>{product.title}</p>      
                        <a href={`products/${product.sku}_1.jpg` } target="_blank" rel="noopener noreferrer">
                            <p>See this product</p>
                        </a>               
                        
                    <b>{util.formatCurrency(product.price)}</b>
                    <br />
                    <button className="btn btn-success" onClick={(e)=>this.props.handleAddToCart(e, product)}>Add to cart</button>
                </div>
            </div>
        ));

        return (
            <div className="row">
                {productItems}
            </div>
        )
    }
}
