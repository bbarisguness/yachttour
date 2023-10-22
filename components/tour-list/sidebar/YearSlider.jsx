import { useEffect, useState } from "react";
import InputRange from "react-input-range";
import { useSearchParams } from 'next/navigation'
import { useRouter } from "next/router";

const YearSlider = () => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const query = router.query
  const minYear = 1956

  const [splitP, setSplitP] = useState(() => {
    if (query?.y) {
      return query?.y?.split(",")
    } else {
      return ''
    }
  })
  const [slicePmin, setSlicePmin] = useState(() => {
    if (splitP !== '') {
      if (parseInt(splitP[0].slice(4, splitP[0].length)) < 0) {
        return minYear
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
    if (query.y) {
      if (parseInt(slicePmin) >= parseInt(slicePmax)) {
        return { min: minYear, max: new Date().getFullYear() + 1 };
      } else {
        return { min: parseInt(slicePmin), max: parseInt(slicePmax) };
      }
    } else {
      return { min: minYear, max: new Date().getFullYear() + 1 };
    }
  });

  useEffect(() => {
    if (query?.y) {
      if (parseInt(slicePmin) >= parseInt(slicePmax)) {
        router.replace({ query: { ...query, y: `min-${minYear},max-${new Date().getFullYear() + 1}` } })
      }
      else if (parseInt(slicePmin) == minYear && parseInt(slicePmax) == new Date().getFullYear() + 1) {
        delete query.y
        router.replace({ query: { ...query } })
      }
    }
  }, [])

  const handleOnChange = (value) => {
    if (value.min < minYear) {
      setPrice({ min: minYear, max: value.max })
    } else {
      setPrice({ min: value.min, max: value.max })
    }
  };

  const changeValue = (e) => {
    if (query?.page) {
      router.replace({ query: { ...query, y: `min-${e.min},max-${e.max}`, page: 1 } })
    } else {
      router.replace({ query: { ...query, y: `min-${e.min},max-${e.max}` } })
    }
  };

  return (
    <div className="js-price-rangeSlider">
      <div className="text-14 fw-500"></div>

      <div className="d-flex justify-between mb-20">
        <div className="text-15 text-dark-1">
          <span className="js-lower mx-1">{price.min}</span>-
          <span className="js-upper mx-1">{price.max}</span>
        </div>
      </div>

      <div className="px-5">
        <InputRange
          formatLabel={(value) => ``}
          minValue={minYear}
          maxValue={new Date().getFullYear() + 1}
          value={price}
          onChange={(value) => handleOnChange(value)}
          onChangeComplete={(e) => changeValue(e)}
        />
      </div>
    </div>
  );
};

export default YearSlider;
