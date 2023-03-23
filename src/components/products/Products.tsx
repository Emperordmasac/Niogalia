import React from "react";

//--IMPORT CONSTANTS
import { products } from "@/src/utils/constants";

//--INTERNAL IMPORTS
import styles from "@/src/styles/styles.module.css";
import { ProductCard } from "@/src/components/homepage/ProductCard";

//--TYPE DEFINITIONS
type IProduct = {
    productId?: string;
};

const Products = ({ productId }: IProduct) => {
    let filteredQuery;
    if (!productId) {
        filteredQuery = "all";
    }
    if (productId) {
        filteredQuery = productId;
    }

    const filteredProducts = products;

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
