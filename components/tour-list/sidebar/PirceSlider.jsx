import { useEffect, useState } from "react";
import InputRange from "react-input-range";
import { useSearchParams } from 'next/navigation'
import { useRouter } from "next/router";

const PirceSlider = () => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const query = router.query

  const [splitP, setSplitP] = useState(() => {
    if (query?.p) {
      return query?.p?.split(",")
    } else {
      return ''
    }
  })
  const [slicePmin, setSlicePmin] = useState(() => {
    if (splitP !== '') {
      if (parseInt(splitP[0].slice(4, splitP[0].length)) < 0) {
        return 0
      } else {
        return splitP[0].slice(4, splitP[0].length)
      }
    } else {
      return ''
    }
  })
  const [slicePmax, setSlicePmax] = useState(() => {
    if (splitP !== '') {
      return splitP[1].slice(4, splitP[1].length)
    } else {
      return ''
    }
  })
  const [price, setPrice] = useState(() => {
    if (query.p) {
      if (parseInt(slicePmin) >= parseInt(slicePmax)) {
        return { min: 0, max: 20000 };
      } else {
        return { min: parseInt(slicePmin), max: parseInt(slicePmax) };
      }
    } else {
      return { min: 0, max: 20000 };
    }
  });

  useEffect(() => {
    if (query?.p) {
      if (parseInt(slicePmin) >= parseInt(slicePmax)) {
        router.replace({ query: { ...query, p: `min-0,max-20000` } })
      }
      else if (parseInt(slicePmin) == 0 && parseInt(slicePmax) == 20000) {
        delete query.p
        router.replace({ query: { ...query } })
      }
    }
  }, [])

  const handleOnChange = (value) => {
    if (value.min < 0) {
      setPrice({ min: 0, max: value.max })
    } else {
      setPrice({ min: value.min, max: value.max })
    }
  };

  const changeValue = (e) => {
    if (query?.page) {
      router.replace({ query: { ...query, p: `min-${e.min},max-${e.max}`, page: 1 } })
    } else {
      router.replace({ query: { ...query, p: `min-${e.min},max-${e.max}` } })
    }
  };

  return (
    <div className="js-price-rangeSlider">
      <div className="text-14 fw-500"></div>

      <div className="d-flex justify-between mb-20">
        <div className="text-15 text-dark-1">
          <span className="js-lower mx-1">${price.min}</span>-
          <span className="js-upper mx-1">${price.max}</span>
        </div>
      </div>

      <div className="px-5">
        <InputRange
          formatLabel={(value) => ``}
          minValue={0}
          maxValue={40000}
          value={price}
          onChange={(value) => handleOnChange(value)}
          onChangeComplete={(e) => changeValue(e)}
        />
      </div>
    </div>
  );
};

export default PirceSlider;
