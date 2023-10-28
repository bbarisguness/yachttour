import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function HpTypes() {
  const [c1, setC1] = useState(false)
  const [c2, setC2] = useState(false)
  const [c3, setC3] = useState(false)
  const [c4, setC4] = useState(false)
  const router = useRouter()
  const query = router.query

  const splitE = query?.hp?.split('-') || ''

  useEffect(() => {
    if (query?.hp) {
      if (splitE[0] == '0' && splitE[1] == '100') {
        setC1(true)
        setC2(false)
        setC3(false)
        setC4(false)
      }
      else if (splitE[0] == '100' && splitE[1] == '300') {
        setC1(false)
        setC2(true)
        setC3(false)
        setC4(false)
      }
      else if (splitE[0] == '300' && splitE[1] == '1000') {
        setC1(false)
        setC2(false)
        setC3(true)
        setC4(false)
      }
      else if (query?.hp == '1000') {
        setC1(false)
        setC2(false)
        setC3(false)
        setC4(true)
      }
    }
  }, [])

  function handleChange1(e) {
    if (e.target.checked) {
      router.replace({ query: { ...query, hp: '0-100', page: '1' } })
      setC2(false)
      setC3(false)
      setC4(false)
      setC1(e.target.checked)
    } else {
      setC1(e.target.checked)
      delete router.query.hp
      router.replace({ query: { ...query, page: '1' } })
    }
  }

  function handleChange2(e) {
    if (e.target.checked) {
      router.replace({ query: { ...query, hp: '100-300', page: '1' } })
      setC2(e.target.checked)
      setC1(false)
      setC3(false)
      setC4(false)
    } else {
      setC2(e.target.checked)
      delete router.query.hp
      router.replace({ query: { ...query, page: '1' } })
    }
  }

  function handleChange3(e) {
    if (e.target.checked) {
      router.replace({ query: { ...query, hp: '300-1000', page: '1' } })
      setC3(e.target.checked)
      setC1(false)
      setC2(false)
      setC4(false)
    } else {
      setC3(e.target.checked)
      delete router.query.hp
      router.replace({ query: { ...query, page: '1' } })
    }
  }

  function handleChange4(e) {
    if (e.target.checked) {
      router.replace({ query: { ...query, hp: '1000', page: '1' } })
      setC4(e.target.checked)
      setC1(false)
      setC2(false)
      setC3(false)
    } else {
      setC4(e.target.checked)
      delete router.query.hp
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
            <div className="text-15 ml-10">0-100</div>
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
            <div className="text-15 ml-10">100-300</div>
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
            <div className="text-15 ml-10">300-1000</div>
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
            <div className="text-15 ml-10">1000+</div>
          </div>
        </div>
        <div className="col-auto">
          <div className="text-15 text-light-1">1</div>
        </div>
      </div>
    </>
  )
}