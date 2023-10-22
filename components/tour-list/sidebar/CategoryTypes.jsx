import { useEffect, useState } from "react";
import { getCategories } from "../../../services/category";
import { useRouter } from "next/router";
import { useSearchParams } from 'next/navigation'

export default function CategoryTypes() {
  const [categories, setCategories] = useState([])
  const searchParams = useSearchParams()

  const [filterCat, setFilterCat] = useState(() => {
    if (searchParams.get('cat')) {
      return searchParams.get('cat')
    } else {
      return ''
    }
  })

  const router = useRouter()
  const query = router.query

  useEffect(() => {
    getCategories().then((data) => {
      setCategories(data.data)
    })
  }, [])

  const removeWord = (wordToRemove) => {
    const words = filterCat.split(',');
    const updatedWords = words.filter((word) => word !== wordToRemove);
    const updatedCat = updatedWords.join(',');
    setFilterCat(updatedCat);
  };

  function changeHandle({ e, category }) {
    if (e.target.checked) {
      if (!(filterCat?.includes(category.attributes.slug))) {
        if (filterCat == '') {
          setFilterCat((prevValue) => prevValue + category.attributes.slug);
        } else {
          setFilterCat((prevValue) => prevValue + ',' + category.attributes.slug);
        }
      }
    } else {
      removeWord(category.attributes.slug)
    }
  }

  useEffect(() => {
    if (filterCat && filterCat !== '') {
      if (parseInt(router?.query?.page) !== 1) {
        router.replace({ query: { ...query, cat: filterCat, page: '1' } })
      } else {
        router.replace({ query: { ...query, cat: filterCat } })
      }
    } else {
      delete router.query.cat
      router.replace({ query: { ...query } })
    }
  }, [filterCat])


  return (
    <>
      {categories.map((category, index) => (
        <div
          className="row y-gap-10 items-center justify-between"
          key={index}
        >
          <div className="col-auto">
            <div className="form-checkbox d-flex items-center">
              <input defaultChecked={searchParams.get('cat')?.includes(category.attributes.slug)} onClick={(e) => changeHandle({ e, category })} data-id={category.id} type="checkbox" />
              <div className="form-checkbox__mark">
                <div className="form-checkbox__icon icon-check" />
              </div>
              <div className="text-15 ml-10">{category.attributes.name}</div>
            </div>
          </div>
          <div className="col-auto">
            <div className="text-15 text-light-1">{category.attributes.tours?.data?.length}</div>
          </div>
        </div>
      ))}
    </>
  )
}