import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function WidthTypes() {
  const [c1, setC1] = useState(false)
  const [c2, setC2] = useState(false)
  const [c3, setC3] = useState(false)
  const [c4, setC4] = useState(false)
  const router = useRouter()
  const query = router.query

  const splitE = query?.w?.split('-') || ''

  useEffect(() => {
    if (query?.w) {
      if (splitE[0] == '0' && splitE[1] == '10') {
        setC1(true)
        setC2(false)
        setC3(false)
        setC4(false)
      }
      else if (splitE[0] == '10' && splitE[1] == '20') {
        setC1(false)
        setC2(true)
        setC3(false)
        setC4(false)
      }
      else if (splitE[0] == '20' && splitE[1] == '40') {
        setC1(false)
        setC2(false)
        setC3(true)
        setC4(false)
      }
      else if (query?.e == '40') {
        setC1(false)
        setC2(false)
        setC3(false)
        setC4(true)
      }
    }
  }, [])

  function handleChange1(e) {
    if (e.target.checked) {
      router.replace({ query: { ...query, w: '0-10', page: '1' } })
      setC2(false)
      setC3(false)
      setC4(false)
      setC1(e.target.checked)
    } else {
      setC1(e.target.checked)
      delete router.query.w
      router.replace({ query: { ...query, page: '1' } })
    }
  }

  function handleChange2(e) {
    if (e.target.checked) {
      router.replace({ query: { ...query, w: '10-20', page: '1' } })
      setC2(e.target.checked)
      setC1(false)
      setC3(false)
      setC4(false)
    } else {
      setC2(e.target.checked)
      delete router.query.w
      router.replace({ query: { ...query, page: '1' } })
    }
  }

  function handleChange3(e) {
    if (e.target.checked) {
      router.replace({ query: { ...query, w: '20-40', page: '1' } })
      setC3(e.target.checked)
      setC1(false)
      setC2(false)
      setC4(false)
    } else {
      setC3(e.target.checked)
      delete router.query.w
      router.replace({ query: { ...query, page: '1' } })
    }
  }

  function handleChange4(e) {
    if (e.target.checked) {
      router.replace({ query: { ...query, w: '40', page: '1' } })
      setC4(e.target.checked)
      setC1(false)
      setC2(false)
      setC3(false)
    } else {
      setC4(e.target.checked)
      delete router.query.w
      router.replace({ query: { ...query, page: '1' } })
    }
  }

  return (
    <>
      <div
        className="row y-gap-10 items-center justify-between"
      >
        <div className="col-auto">
          <div className="form-checkbox d-flex items-center">
            <input checked={c1} onChange={(e) => handleChange1(e)} type="checkbox" />
            <div className="form-checkbox__mark">
              <div className="form-checkbox__icon icon-check" />
            </div>
            <div className="text-15 ml-10">0-10</div>
          </div>
        </div>
        <div className="col-auto">
          <div className="text-15 text-light-1">1</div>
        </div>
      </div>

      <div
        className="row y-gap-10 items-center justify-between"
      >
        <div className="col-auto">
          <div className="form-checkbox d-flex items-center">
            <input checked={c2} onChange={(e) => handleChange2(e)} type="checkbox" />
            <div className="form-checkbox__mark">
              <div className="form-checkbox__icon icon-check" />
            </div>
            <div className="text-15 ml-10">10-20</div>
          </div>
        </div>
        <div className="col-auto">
          <div className="text-15 text-light-1">1</div>
        </div>
      </div>

      <div
        className="row y-gap-10 items-center justify-between"
      >
        <div className="col-auto">
          <div className="form-checkbox d-flex items-center">
            <input checked={c3} onChange={(e) => handleChange3(e)} type="checkbox" />
            <div className="form-checkbox__mark">
              <div className="form-checkbox__icon icon-check" />
            </div>
            <div className="text-15 ml-10">20-40</div>
          </div>
        </div>
        <div className="col-auto">
          <div className="text-15 text-light-1">1</div>
        </div>
      </div>

      <div
        className="row y-gap-10 items-center justify-between"
      >
        <div className="col-auto">
          <div className="form-checkbox d-flex items-center">
            <input checked={c4} onChange={(e) => handleChange4(e)} type="checkbox" />
            <div className="form-checkbox__mark">
              <div className="form-checkbox__icon icon-check" />
            </div>
            <div className="text-15 ml-10">40+</div>
          </div>
        </div>
        <div className="col-auto">
          <div className="text-15 text-light-1">1</div>
        </div>
      </div>
    </>
  )
}