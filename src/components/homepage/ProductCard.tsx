import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/src/styles/styles.module.css";

//--TYPE DEFINITIONS
export type Props = {
    products: any;
    style?: string;
};

export const ProductCard = ({ products, style }: Props): JSX.Element => {
    return (
        <>
            {products.map((product, index) => (
                <div
                    key={product.id}
                    className={`${style}? ${styles.style}: ${styles.product}`}
                >
                    <Link href={`/categories/product/${product.id}`}>
                        <div className={styles.product_header}>
                            <Image src={product.img} alt={product.category} />
                        </div>
                        <div className={styles.product_details}>
                            <p>{product.description}</p>
                            <span>$ {product.price}</span>
                        </div>
                    </Link>
                </div>
            ))}
        </>
    );
};
