import React from "react";
import Image from "next/image";

import { emptyCart } from "public/img";
import { BrowseButton } from "@/src/components/common/Button";

const EmptyCart = ({ toggleCart }: any) => {
    return (
        <div className="flex flex-col items-center w-[15rem] mx-[auto] my-[10rem]">
            <Image src={emptyCart} alt="cart_image" />
            <p className="text-[1.4rem] font-[600] mt-10 mb-10">
                Your cart is empty
            </p>
            <BrowseButton />
            {/* <button
                className="w-full h-[3rem] text-[1.2rem] mt-5 cursor-pointer border-solid border-[green] bg-[purple] px-2 py-4"
                onClick={toggleCart}
            >
                Keep Browsing
            </button> */}
        </div>
    );
};

export default EmptyCart;
