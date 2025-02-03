import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const TopHeaderFilter = ({ data, b, d }) => {
  const router = useRouter()
  const query = router.query
  const [sort, setSort] = useState(false)

  function sortHandle() {
    setSort(!sort)
    if (!sort) {
      router.replace({ query: { ...query, sort: 'DESC', page: '1' } })
    } else {
      router.replace({ query: { ...query, sort: 'ASC', page: '1' } })
    }
  }

  // useEffect(() => {
  //   if (sort) {
  //     router.replace({ query: { ...query, sort: 'DESC', page: '1' } })
  //   } else {
  //     router.replace({ query: { ...query, sort: 'ASC', page: '1' } })
  //   }
  // }, [sort])

  // useEffect(() => {
  //   if (query?.sort == 'ASC' || query?.sort == 'asc') {
  //     setSort(false)
  //   } else if (query?.sort == 'DESC' || query?.sort == 'desc') {
  //     setSort(true)
  //   } else {
  //     setSort(false)
  //     delete router.query.sort
  //     router.replace({ query: { ...query } })
  //   }
  // }, [])
  return (
    <>
      <div className="row y-gap-10 items-center justify-between">
        <div className="col-auto">
          <div className="text-18">
            {/* <span className="fw-500">{data?.meta?.pagination?.total} Tours</span> in <span style={{ textTransform: "capitalize" }}>{query?.dest ? query.dest.replace(/-/g, " ") : 'All Tour'}</span> */}
            <span className="fw-500">{`All ${d} in ${b}`}</span>
          </div>
        </div>
        {/* End .col */}

        <div className="col-auto">
          <div className="row x-gap-20 y-gap-20">
            <div className="col-auto">
              <button onClick={() => sortHandle()} className="button -blue-1 h-40 px-20 rounded-100 bg-blue-1-05 text-15 text-blue-1">
                <i className="icon-up-down text-14 mr-10" />
                Sort
              </button>
            </div>
            {/* End .col */}

            <div className="col-auto d-none xl:d-block">
              <button
                data-bs-toggle="offcanvas"
                data-bs-target="#listingSidebar"
                className="button -blue-1 h-40 px-20 rounded-100 bg-blue-1-05 text-15 text-blue-1"
              >
                <i className="icon-up-down text-14 mr-10" />
                Filter
              </button>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* End .col */}
      </div>
      {/* End .row */}
    </>
  );
};

export default TopHeaderFilter;
