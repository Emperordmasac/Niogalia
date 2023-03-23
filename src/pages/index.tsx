//--INTERNAL IMPORTS
import MainPageLayout from "@/src/layouts/MainPageLayout";
import HomeHero from "@/src/components/homepage/HomeHero";
import NewProduct from "@/src/components/homepage/NewProduct";
import TrendingProducts from "@/src/components/homepage/TrendingProduct";
import { Banner, ReverseBanner } from "@/src/components/common/Banner";

//--IMPORT CONSTANTS
import { banner1, banner2 } from "@/public/img/banner";

export default function Home() {
    return (
        <MainPageLayout>
            <HomeHero />
            <NewProduct />
            <Banner
                img={banner1}
                title="Creative harmonious living"
                text=" RAOUF Products are all made to standard sizes so that you can mix and match them freely."
            />
            <TrendingProducts />
            <ReverseBanner
                img={banner2}
                title="Creative harmonious living"
                text=" RAOUF Products are all made to standard sizes so that you can mix and match them freely."
            />
        </MainPageLayout>
    );
}
