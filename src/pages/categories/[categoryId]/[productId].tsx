import React from "react";
import { useRouter } from "next/router";

//--INTERNAL IMPORTS
import MainPageLayout from "@/src/layouts/MainPageLayout";
import ProductDetails from "@/src/components/products/ProductDetails";

//--IMPORT CONSTANTS
import { products, categories } from "src/utils/constants";

const Category = ({ item }) => {
    const router = useRouter();
    const productId = router.query.productId;

    return (
        <MainPageLayout>
            <ProductDetails productId={productId} />
        </MainPageLayout>
    );
};

export default Category;
