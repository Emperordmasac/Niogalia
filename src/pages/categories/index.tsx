import React from "react";

//--INTERNAL IMPORTS
import MainPageLayout from "@/src/layouts/MainPageLayout";
import CategoryHeader from "@/src/components/categories/Category";
import Products from "@/src/components/products/Products";

const Category = () => {
    return (
        <MainPageLayout>
            <CategoryHeader />
            <Products />
        </MainPageLayout>
    );
};

export default Category;
