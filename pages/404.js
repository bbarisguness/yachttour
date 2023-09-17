import { useRouter } from 'next/router'
import dynamic from "next/dynamic";
import Seo from "../components/common/Seo";
import Header from '../components/custom/home/headers/header2/header'
import Footer from '../components/custom/footers/footer'
import NotFound from "../components/common/NotFound";
import { useEffect } from 'react';

const NotFoundPage = () => {
  const router = useRouter()

  useEffect(() => {
    router.replace('/404')
  }, [])
  return (
    <>
      <Seo pageTitle="404" />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <Header />
      {/* End Header 1 */}

      <NotFound />
      {/* End 404 section */}

      <Footer />
      {/* End Call To Actions Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(NotFoundPage), { ssr: false });
