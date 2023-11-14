import Head from "next/head";

const Seo = ({ pageTitle, pageDesc }) => (
  <>
    <Head>
      <title>
        {pageTitle &&
          `${pageTitle} || GoTrip - Travel & Tour React NextJS Template}`}
      </title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={pageDesc ? `${pageDesc}` : 'GoTrip Travel & Tour'} />
    </Head>
  </>
);

export default Seo;
