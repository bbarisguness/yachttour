import Head from "next/head";

const Seo = ({ pageTitle, pageDesc, searchPage = false, canonical = '' }) => (
  <>
    <Head>
      {
        searchPage &&
        <link rel="search" href="/tours" />
      }
      <title>
        {pageTitle &&
          `${pageTitle} - Moro Yacht`}
      </title>
      {
        canonical !== '' &&
        <link rel="canonical" href={canonical} />
      }
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={pageDesc ? `${pageDesc}` : 'GoTrip Travel & Tour'} />
    </Head>
  </>
);

export default Seo;
