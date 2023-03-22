import React from "react";

//--INTERNAL STYLES & CONSTANTS
import styles from "@/src/styles/styles.module.css";
import { products } from "@/src/utils/constants";

//--INTERNAL IMORTS
import { Title } from "@/src/components/common/Title";
import { ProductCard } from "./ProductCard";

const NewProduct = () => {
    const filteredProducts = products.filter((product) => product.id <= 8);
    return (
        <div className={styles.newproduct}>
            <Title name="New Product" style="container" />
            <div className="container">
                <div className={styles.product_grid}>
                    <ProductCard products={filteredProducts} />
                </div>
            </div>
        </div>
    );
};

export default NewProduct;
