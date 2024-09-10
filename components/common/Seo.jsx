import Head from "next/head";

const Seo = ({ pageTitle, nofollow = false }) => (  
  <>
    <Head>
      <title>
        {pageTitle &&
          `${pageTitle} || GoTrip - Travel & Tour React NextJS Template}`}
      </title>
      {
        nofollow &&
        <meta name="robots" content="nofollow" />
      }
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  </>
);

export default Seo;
