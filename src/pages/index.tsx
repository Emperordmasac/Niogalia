// import { getAuth, onAuthStateChanged } from 'firebase/auth';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';

//--INTERNAL IMPORTS
// import { Banner, ReverseBanner } from '@/src/components/common/Banner';
// import HomeHero from '@/src/components/homepage/HomeHero';
// import NewProduct from '@/src/components/homepage/NewProduct';
// import TrendingProducts from '@/src/components/homepage/TrendingProduct';
// import MainPageLayout from '@/src/layouts/MainPageLayout';

// import { loggedIn } from '@/src/redux/userSlice';
// import { loginFn } from '@/src/services/queries/auth';

//--IMPORT CONSTANTS
// import { banner1, banner2 } from '@/public/img/banner';

// export default function Home() {
//   const auth = getAuth();
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const AuthCheck = onAuthStateChanged(auth, (user: any) => {
//       if (user) {
//         let authToken = user.accessToken;
//         loginFn(authToken)
//           .then((res) => {
//             dispatch(
//               loggedIn({
//                 name: res.data.name,
//                 email: res.data.email,
//                 role: res.data.role,
//                 token: authToken,
//                 _id: res.data._id,
//               })
//             );
//           })
//           .catch((err) => {
//             console.log('backend_error->', err);
//           });
//       }
//     });
//     return () => AuthCheck();
//   }, [auth, dispatch]);

//   return (
//     <MainPageLayout>
//       <HomeHero />
//       <NewProduct />
//       <Banner
//         img={banner1}
//         title="Creative harmonious living"
//         text=" RAOUF Products are all made to standard sizes so that you can mix and match them freely."
//       />
//       <TrendingProducts />
//       <ReverseBanner
//         img={banner2}
//         title="Creative harmonious living"
//         text=" RAOUF Products are all made to standard sizes so that you can mix and match them freely."
//       />
//     </MainPageLayout>
//   );
// }

import { mockSidebarLayoutProps } from '@/src/components/layouts/sidebar/SidebarLayout.mocks';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import SidebarLayout from '../components/layouts/sidebar/SidebarLayout';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <section>
      <h1>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <SidebarLayout {...mockSidebarLayoutProps.base} />
      {page}
    </PrimaryLayout>
  );
};
