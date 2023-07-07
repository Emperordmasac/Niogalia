import React from "react";

// import { emptyCart } from "public/img";
import { BrowseButton } from "@/src/components/common/Button";

const EmptyCart = ({ toggleCart }: any) => {
  return (
    <div className="flex flex-col items-center w-[15rem] mx-[auto] my-[10rem]">
      {toggleCart ? (
        <p className="text-[1.4rem] font-[600] mt-10 mb-10">
          Your cart is empty
        </p>
      ) : (
        <p className="text-[1.4rem] font-[600] mt-10 mb-10">
          Your cart is not empty
        </p>
      )}

      <BrowseButton />
    </div>
  );
};

export default EmptyCart;
