import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Pagination = ({ data }) => {
  const router = useRouter()
  const query = router.query;


  const [currentPage, setCurrentPage] = useState(() => {
    if (query?.page && !(query.page <= 0) && parseInt(query?.page)) {
      return parseInt(query?.page)
    } else {
      return 1
    }
  })

  useEffect(() => {
    if (currentPage !== 1 && parseInt(query?.page) !== 1) {
      if (parseInt(query?.page) !== currentPage && !(parseInt(query?.page) <= 0)) {
        setCurrentPage(`${parseInt(query?.page)}`)
        // router.replace({ query: `page=${currentPage}` })
        router.replace({ query: { ...query, page: currentPage } })
      }
    } else {
      setCurrentPage(1)
    }
  }, [query])

  useEffect(() => {

    async function change() {
      if (currentPage !== 1) {
        // router.replace({ query: `page=${currentPage}` })
        await router.replace({ query: { ...query, page: currentPage } })
      } else {
        // router.replace('/tours')
        delete router.query.page
        await router.replace({ query: { ...query } })
      }
    }
    const changeTime = setTimeout(() => {
      change()
    }, 250);

    return () => clearTimeout(changeTime)

  }, [currentPage])

  const totalPages = data?.pagination?.pageCount;

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPage = (pageNumber, isActive = false) => {
    const className = `size-40 flex-center rounded-full cursor-pointer ${isActive ? "bg-dark-1 text-white" : ""
      }`;
    return (
      <div key={pageNumber} className="col-auto">
        <div className={className} onClick={() => handlePageClick(pageNumber)}>
          {pageNumber}
        </div>
      </div>
    );
  };

  const renderPages = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i)
    }
    const pages = pageNumbers.map((pageNumber) =>
      renderPage(pageNumber, pageNumber === currentPage)
    );
    return pages;
  };

  function decrementPageCount() {
    if (!(currentPage <= 1)) {
      setCurrentPage(currentPage - 1)
    }
  }

  function increasePageCount() {
    if (!(currentPage >= totalPages)) {
      setCurrentPage(currentPage + 1)
    }
  }

  return (
    <div className="border-top-light mt-30 pt-30">
      <div className="row x-gap-10 y-gap-20 justify-between md:justify-center">
        <div className="col-auto md:order-1">
          <button onClick={() => decrementPageCount()} className="button -blue-1 size-40 rounded-full border-light">
            <i className="icon-chevron-left text-12" />
          </button>
        </div>

        <div className="col-md-auto md:order-3">
          <div className="row x-gap-20 y-gap-20 items-center md:d-none">
            {renderPages()}
            {/* {
              totalPages > 5 &&
              <div className="col-auto">
                <div className="size-40 flex-center rounded-full">...</div>
              </div>
            }
            {
              totalPages > 5 &&
              <div className="col-auto">
                <div className="size-40 flex-center rounded-full">{totalPages}</div>
              </div>
            } */}
          </div>

          <div className="row x-gap-10 y-gap-20 justify-center items-center d-none md:d-flex">
            {renderPages()}
          </div>

          {/* <div className="text-center mt-30 md:mt-10">
            <div className="text-14 text-light-1">
              1 – 20 of 300+ properties found
            </div>
          </div> */}
        </div>

        <div className="col-auto md:order-2">
          <button onClick={() => increasePageCount()} className="button -blue-1 size-40 rounded-full border-light">
            <i className="icon-chevron-right text-12" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
