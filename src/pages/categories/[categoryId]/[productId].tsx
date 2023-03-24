import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

//--INTERNAL IMPORTS
import MainPageLayout from "@/src/layouts/MainPageLayout";
import ProductDetails from "@/src/components/products/ProductDetails";

//--IMPORT CONSTANTS

const Category = () => {
    const [loading, setLoading] = useState(true);
    const [productId, setProductId] = useState<any | string>();
    const router = useRouter();

    useEffect(() => {
        if (!router.isReady) {
            setLoading(true);
        } else {
            const { productId } = router.query;
            setProductId(productId);
            setLoading(false);
        }
    }, [router.isReady, router.query]);

    return (
        <>
            {loading ? (
                <h1 style={{ marginTop: "50px" }}>Loading</h1>
            ) : (
                <MainPageLayout>
                    <ProductDetails productId={productId} />
                </MainPageLayout>
            )}
        </>
    );
};

export default Category;
