import { useEffect, useState } from "react";
import { getCategories } from "../../../services/category";
import { useRouter } from "next/router";

export default function CategoryTypes() {
  const [categories, setCategories] = useState([])
  const router = useRouter()
  
  useEffect(() => {
    getCategories().then((data) => {
      setCategories(data.data)
    })
  }, [])

  return (
    <>
      {categories.map((category, index) => (
        <div
          className="row y-gap-10 items-center justify-between"
          key={index}
        >
          <div className="col-auto">
            <div className="form-checkbox d-flex items-center">
              <input onClick={(e) => console.log(e.target.getAttribute("data-id"))} data-id={category.id} type="checkbox" />
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