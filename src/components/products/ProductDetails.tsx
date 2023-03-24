import React, { useState, useEffect } from "react";
import Image from "next/image";

//--INTERNAL IMPORTS
import styles from "@/src/styles/styles.module.css";
import { products } from "src/utils/constants";

//--TYPE DEFINTIONS
type Props = {
    productId: any;
};

const ProductDetails = ({ productId }: Props): JSX.Element => {
    const item = products.filter((item) => item.id === Number(productId));
    const [quantity, setQuantity] = useState(1);
    const [image, setImage] = useState(item[0].img);

    const switchImage = (e) => {
        setImage(e.target.src);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const increaseQuantity = () => {
        if (quantity >= 1) {
            setQuantity(quantity + 1);
        }
    };

    const [notify, setNotify] = useState(false);

    const calcPrice = (quanity) => {
        return quanity * item[0].price;
    };

    return (
        <>
            <div
                onAnimationEnd={() => setNotify(false)}
                className={`${styles.notify} ${notify ? "slide_in" : ""}`}
            >
                <p>Item has been added to the cart &nbsp; ✅</p>
            </div>
            <div className={styles.product_container}>
                <div className="container">
                    <div className={styles.product_container_box}>
                        <h3 className={styles.product_header}>
                            {item[0].description}
                        </h3>
                        <div className={styles.product_container_box_left}>
                            <div className={styles.big_img}>
                                <Image
                                    src={item[0].img}
                                    alt="product"
                                    width={600}
                                />
                            </div>
                            <div className={styles.small_img}>
                                <Image
                                    src={item[0].img}
                                    alt="product"
                                    width={600}
                                    onMouseOver={switchImage}
                                />
                                <Image
                                    src={item[0].otherImgs[0]}
                                    alt="product"
                                    width={600}
                                    onMouseOver={switchImage}
                                />{" "}
                                <Image
                                    src={item[0].otherImgs[1]}
                                    alt="product"
                                    width={600}
                                    onMouseOver={switchImage}
                                />
                            </div>
                        </div>
                        <div className={styles.product_container_box_right}>
                            <p className={styles.product_spec}>
                                {item[0].specs}
                            </p>
                            <div className={styles.product_quantity}>
                                <p>Quantity</p>
                                <div className={styles.action_btns}>
                                    <button onClick={decreaseQuantity}>
                                        -
                                    </button>
                                    <p>{quantity}</p>
                                    <button onClick={increaseQuantity}>
                                        +
                                    </button>
                                </div>
                                <p className={styles.product_price}>
                                    ${calcPrice(quantity)}.00
                                </p>
                            </div>
                            <div className={styles.product_cta}>
                                <button className={styles.cta_add}>
                                    add to cart
                                </button>
                                <button className={styles.cta_buy}>
                                    buy now
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className={styles.full_specifications}>
                        <div className={styles.spec_container}>
                            <div className={styles.spec_title}>Texture:</div>
                            <div className={styles.spec_desc}>
                                {item[0].texture}
                            </div>
                        </div>
                        <div className={styles.spec_container}>
                            <div className={styles.spec_title}>Weight:</div>
                            <div className={styles.spec_desc}>
                                {item[0].weight}
                            </div>
                        </div>
                        <div className={styles.spec_container}>
                            <div className={styles.spec_title}>Size:</div>
                            <div className={styles.spec_desc}>
                                {item[0].size}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetails;
