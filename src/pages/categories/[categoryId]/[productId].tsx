import React from "react";
import { useRouter } from "next/router";

//--INTERNAL IMPORTS
import MainPageLayout from "@/src/layouts/MainPageLayout";
import { Banner } from "@/src/components/common/Banner";

//--IMPORT CONSTANTS
import { banner1 } from "@/public/img/banner";

const Category = () => {
    const router = useRouter();
    const categoryName = router.query.categoryId;

    return (
        <MainPageLayout>
            <Banner
                img={banner1}
                title="Creative harmonious living"
                text=" RAOUF Products are all made to standard sizes so that you can mix and match them freely."
            />
        </MainPageLayout>
    );
};

export default Category;
