import React from "react";
// import { useRouter } from "next/router";

//--INTERNAL IMPORTS
import MainPageLayout from "@/src/layouts/MainPageLayout";
import CategoryHeader from "@/src/components/categories/Category";

const Category = () => {
    return (
        <MainPageLayout>
            <CategoryHeader />
        </MainPageLayout>
    );
};

export default Category;
