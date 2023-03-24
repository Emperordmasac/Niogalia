import React from "react";
import { useRouter } from "next/router";

//--INTERNAL IMPORTS
import MainPageLayout from "@/src/layouts/MainPageLayout";
import Products from "@/src/components/products/Products";
import CategoryHeader from "@/src/components/categories/components/CategoryHeader";

//--IMPORT CONSTANTS
import { banner1 } from "@/public/img/banner";

const Category = () => {
    const router = useRouter();
    const categoryName = router.query.categoryId;

    return (
        <MainPageLayout>
            <CategoryHeader title={categoryName} />
            <Products productId={categoryName} />
        </MainPageLayout>
    );
};

export default Category;
