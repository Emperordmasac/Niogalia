import React from "react";

//--INTERNAL STYLES & CONSTANTS
import styles from "@/src/styles/styles.module.css";
import { products } from "@/src/utils/constants";

//--INTERNAL IMORTS
import { Title } from "@/src/components/common/Title";
import { ProductCard } from "./ProductCard";

const TrendingProducts = () => {
    const slideLeft = () => {
        let slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 235;
    };

    const slideRight = () => {
        let slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 235;
    };

    const filteredProducts = products.filter((product) => product.id >= 8);

    return (
        <div className={styles.trending}>
            <div className="container">
                <div className={styles.trending_title_btns}>
                    <Title name="Trending Now" />
                    <div className={styles.trending_btns}>
                        <button title="scroll left" onClick={slideLeft}>
                            <i className="fa-solid fa-arrow-left">{"<"}</i>
                        </button>
                        <button title="scroll right" onClick={slideRight}>
                            <i className="fa-solid fa-arrow-right">{">"}</i>
                        </button>
                    </div>
                </div>
                <div className={styles.trending_row_container} id="slider">
                    <ProductCard
                        products={filteredProducts}
                        style="trending_row_item"
                    />
                </div>
            </div>
        </div>
    );
};

export default TrendingProducts;
