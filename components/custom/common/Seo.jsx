import Head from "next/head";

const Seo = ({ pageTitle, pageDesc }) => (
  <>
    <Head>
      <title>
        {pageTitle &&
          `${pageTitle} - Moro Yacht`}
      </title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={pageDesc ? `${pageDesc}` : 'GoTrip Travel & Tour'} />
    </Head>
  </>
);

export default Seo;
