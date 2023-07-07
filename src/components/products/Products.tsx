import React from 'react';

//--IMPORT CONSTANTS
import { products } from '@/src/utils/constants';

//--INTERNAL IMPORTS
import styles from '@/src/styles/styles.module.css';
import { ProductCard } from '@/src/components/homepage/ProductCard';

//--TYPE DEFINITIONS
type IProduct = {
  productId?: any;
};

const Products = ({ productId }: IProduct) => {
  let filteredProducts;
  if (productId) {
    filteredProducts = products.filter((p) => p.category === productId);
  } else {
    filteredProducts = products;
  }

  return (
    <div className={styles.newproduct}>
      <div className="container">
        <div className={styles.product_grid}>
          <ProductCard products={filteredProducts} />
        </div>
      </div>
    </div>
  );
};

export default Products;
