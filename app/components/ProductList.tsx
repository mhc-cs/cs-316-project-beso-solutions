import React from 'react';

export default function ProductList (props) {
    const displayProducts = (props) => {
        const {products} = props;

        return products;
    }

    return(
        <>
            {displayProducts(props)}
        </>
    )
}