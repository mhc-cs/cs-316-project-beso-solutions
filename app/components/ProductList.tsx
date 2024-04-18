import React from 'react';

export default function ProductList (props) {
    const displayProducts = (props) => {
        const {products} = props;
    

        if (products.length > 0){
            return(
                products.map((product, index) => {
                    console.log(product);
                    return(
                        <div className='card' key={product._id}>
                            <h1 className="product__name">{product.name}</h1>
                            <p className="price">{product.price}</p>
                            <p>{product.description}</p>
                            <p><button>Add to Cart</button></p>
                        </div>
                    )
                })
            )
        }else{
            return(<h3>No Products Yet</h3>)
        }
    }

    return(
        <>
            {displayProducts(props)}
        </>
    )
}