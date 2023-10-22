import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getDestinations } from "../../../services/destination";
import { useSearchParams } from 'next/navigation'

export default function DestinationTypes() {
  const [destinations, setDestinations] = useState([])
  const searchParams = useSearchParams()

  const [filterDest, setFilterDest] = useState(() => {
    if (searchParams.get('dest')) {
      return searchParams.get('dest')
    } else {
      return ''
    }
  })

  const router = useRouter()
  const query = router.query

  useEffect(() => {
    getDestinations().then((data) => {
      setDestinations(data.data)
    })
  }, [])

  const removeWord = (wordToRemove) => {
    const words = filterDest.split(',');
    const updatedWords = words.filter((word) => word !== wordToRemove);
    const updatedDest = updatedWords.join(',');
    setFilterDest(updatedDest);
  };

  function changeHandle({ e, destination }) {
    if (e.target.checked) {
      if (!(filterDest?.includes(destination.attributes.slug))) {
        if (filterDest == '') {
          setFilterDest((prevValue) => prevValue + destination.attributes.slug);
        } else {
          setFilterDest((prevValue) => prevValue + ',' + destination.attributes.slug);
        }
      }
    } else {
      removeWord(destination.attributes.slug)
    }
  }

  useEffect(() => {
    if (filterDest && filterDest !== '') {
      if (parseInt(router?.query?.page) !== 1) {
        router.replace({ query: { ...query, dest: filterDest, page: '1' } })
      } else {
        router.replace({ query: { ...query, dest: filterDest } })
      }
    } else {
      delete router.query.dest
      router.replace({ query: { ...query } })
    }
  }, [filterDest])

  return (
    <>
      {destinations.map((destination, index) => (
        <div
          className="row y-gap-10 items-center justify-between"
          key={index}
        >
          <div className="col-auto">
            <div className="form-checkbox d-flex items-center">
              <input defaultChecked={searchParams.get('dest')?.includes(destination.attributes.slug)} onClick={(e) => changeHandle({ e, destination })} data-id={destination.id} type="checkbox" />
              <div className="form-checkbox__mark">
                <div className="form-checkbox__icon icon-check" />
              </div>
              <div className="text-15 ml-10">{destination.attributes.name}</div>
            </div>
          </div>
          <div className="col-auto">
            <div className="text-15 text-light-1">{destination.attributes.tours?.data?.length}</div>
          </div>
        </div>
      ))}
    </>
  )
}