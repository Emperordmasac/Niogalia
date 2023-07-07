import React, { useState } from "react";
import Image from "next/image";

//--INTERNAL IMPORTS
import styles from "@/src/styles/styles.module.css";
import { products } from "src/utils/constants";

//--TYPE DEFINTIONS
type Props = {
  productId?: number | string;
};

const ProductDetails = ({ productId }: Props) => {
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

  const showNotify = () => {
    setNotify(!notify);
  };

  return (
    <>
      <div
        onAnimationEnd={() => setNotify(false)}
        className={`notify ${notify ? "slide-in" : ""}`}
      >
        <p>Item has been added to the cart &nbsp; ✅</p>
      </div>
      <div className={styles.single_product_container}>
        <div className="container">
          <div className={styles.single_product_container_box}>
            <h3 className={styles.single_product_header}>
              {item[0].description}
            </h3>
            <div className={styles.single_product_container_box_left}>
              <div className={styles.single_big_img}>
                <Image src={image} alt="product" width={450} height={450} />
              </div>
              <div className={styles.single_small_img}>
                <Image
                  src={item[0].img}
                  alt="product"
                  width={300}
                  height={300}
                  onMouseOver={switchImage}
                />
                <Image
                  src={item[0].otherImgs[0]}
                  alt="product"
                  width={300}
                  height={300}
                  onMouseOver={switchImage}
                />
                <Image
                  src={item[0].otherImgs[1]}
                  alt="product"
                  width={300}
                  height={300}
                  onMouseOver={switchImage}
                />
              </div>
            </div>
            <div className={styles.single_product_container_box_right}>
              <p className={styles.single_product_spec}>{item[0].specs}</p>
              <div className={styles.single_product_quantity}>
                <p>Quantity</p>
                <div className={styles.single_action_btns}>
                  <button onClick={decreaseQuantity}>-</button>
                  <p>{quantity}</p>
                  <button onClick={increaseQuantity}>+</button>
                </div>
                <p className={styles.single_product_price}>
                  ${calcPrice(quantity)}.00
                </p>
              </div>
              <div className={styles.single_product_cta}>
                <button
                  className={styles.single_cta_add}
                  onClick={() => {
                    showNotify();
                    console.log(notify);
                  }}
                >
                  add to cart
                </button>
                <button className={styles.single_cta_buy}>buy now</button>
              </div>
            </div>
          </div>

          <div className={styles.single_full_specifications}>
            <div className={styles.single_spec_container}>
              <div className={styles.single_spec_title}>Texture:</div>
              <div className={styles.single_spec_desc}>{item[0].texture}</div>
            </div>
            <div className={styles.single_spec_container}>
              <div className={styles.single_spec_title}>Weight:</div>
              <div className={styles.single_spec_desc}>{item[0].weight}</div>
            </div>
            <div className={styles.single_spec_container}>
              <div className={styles.single_spec_title}>Size:</div>
              <div className={styles.single_spec_desc}>{item[0].size}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
