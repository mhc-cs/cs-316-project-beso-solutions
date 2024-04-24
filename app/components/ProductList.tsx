import React from 'react';

/*export default function ProductList (props:[]) {
    const displayProducts = (props:[]) => {
        const products = props;

        return products;
    }

    return(
        <>
            {displayProducts(props)}
        </>
    )
}*/
interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    // Add other properties if needed
}

interface ProductListProps {
    products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
    return (
    <div>
        {/* Render your list of products here */}
        <div className="product-list">
            {products.map(product => (
                <div className="product" key={product.id}>
                <h3>{product.name}</h3>
                <p>Price: ${product.price}</p>
                <p>Description: {product.description}</p>
                {/* Render other product details here if needed */}
                </div>
            ))} 
        </div>

    </div>
    );
}
  
export default ProductList;