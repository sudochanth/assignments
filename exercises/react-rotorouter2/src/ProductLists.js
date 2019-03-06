import React from 'react';
import Product from './Product';
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import list from './products.json';
import './App.css';


const ProductLists = () => {
    const mappedList = list.map(product => <Link className="link" key={product._id} to={`/products/${product._id}`}>{product.name}</Link>)
    return (
        <div>
            <h1>Products</h1>
            <h3>{mappedList}</h3>
            <Switch>
                <Route exact path='/products/:_id' component={Product} />
            </Switch>
        </div>
    );
};

export default ProductLists;