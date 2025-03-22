"use client";

import Itinerary from '../../components/tour-single/itinerary'
import Link from 'next/link';
import React, { useState } from 'react';

const Overview = ({ data }) => {
  const [descView, setDescView] = useState(false)
  const [cancellationView, setCancellationView] = useState(false)
  return (
    <>
      <h3 className="text-22 fw-500 pt-40 border-top-light">Overview</h3>
      <p style={{ whiteSpace: 'pre-line' }} className="text-dark-1 text-15 mt-20">
        {data?.data[0]?.attributes?.shortText}
      </p>
      {
        data?.data[0]?.attributes?.feature2Title &&
        <>
          <h3 className="text-22 fw-500 pt-40">{data?.data[0]?.attributes?.feature2Title}</h3>
          <p style={{ whiteSpace: 'pre-line' }} className="text-dark-1 text-15 mt-20">
            {data?.data[0]?.attributes?.feature2Desc}
          </p>
        </>
      }
      <div className="pt-40  mb-30">
        <div className="col-auto">
          <h5 className="d-flex items-center text-16 fw-500">
            <i className="icon-nearby text-20 mr-10" />
            Departs from:
          </h5>
          <ul className="list-disc text-15 mt-10">
            {
              data?.data[0]?.attributes?.ports?.data.map((item, i) => {
                return (
                  <li key={i}>{item?.attributes?.name}</li>
                )
              })
            }
          </ul>
        </div>
      </div>

      {
        data?.data[0]?.attributes?.itineraries?.data.length > 0 &&
        <div id="itinerary" className="col-12 mb-30">
          <h3 className="text-22 fw-500 mb-20 border-top-light pt-40">Itinerary</h3>
          <Itinerary data={data} />
        </div>
      }

      <div id="info" className="col-12">
        {
          data?.data[0]?.attributes?.highlights?.length > 0 &&
          <>
            <div className="mb-20 border-top-light pt-10"></div>
            <div className='row'>
              <div className='col-xl-3 fw-500'>
                Highlights
              </div>
              <div className='col-xl-9'>
                <ul style={{ listStyle: 'inside' }}>
                  {
                    data?.data[0]?.attributes?.highlights?.map((itm, i) => {
                      return (
                        <li key={i} style={{ listStyle: 'inside' }}>{itm?.title}</li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
          </>
        }

        <div className="mb-20 mt-20 border-top-light pt-10"></div>
        <div className='row'>
          <div className='col-xl-3 fw-500'>
            Full description
          </div>
          <div className='col-xl-9'>
            <div style={{ whiteSpace: 'pre-line', display: descView ? '' : '-webkit-box', WebkitLineClamp: descView ? '' : '4', WebkitBoxOrient: descView ? '' : 'vertical', overflow: descView ? '' : 'hidden', textOverflow: descView ? '' : 'ellipsis' }}>
              {data?.data[0]?.attributes?.longText}
            </div>
            <button onClick={() => setDescView(!descView)} style={{ textDecoration: 'underline' }}>{descView ? "See less" : "See more"}</button>
          </div>
        </div>

        {
          data?.data[0]?.attributes?.includes?.length > 0 &&
          <>
            <div className="mb-20 mt-20 border-top-light pt-10"></div>
            <div className='row'>
              <div className='col-xl-3 fw-500'>
                Includes
              </div>
              <div className='col-xl-9'>
                <ul style={{ listStyle: 'inside' }}>
                  {
                    data?.data[0]?.attributes?.includes?.map((itm, i) => {
                      return (
                        <div key={i}>
                          <i className={`${itm?.included ? "icon-check" : "icon-close"} text-10 mr-20`}></i>{itm?.title}
                        </div>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
          </>
        }

        {
          data?.data[0]?.attributes?.notSuitableFor?.length > 0 &&
          <>
            <div className="mb-20 mt-20 border-top-light pt-10"></div>
            <div className='row'>
              <div className='col-xl-3 fw-500'>
                Not suitable for
              </div>
              <div className='col-xl-9'>
                <ul style={{ listStyle: 'inside' }}>
                  {
                    data?.data[0]?.attributes?.notSuitableFor?.map((itm, i) => {
                      return (
                        <li key={i} style={{ listStyle: 'inside' }}>{itm?.title}</li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
          </>
        }

        {
          data?.data[0]?.attributes?.meetingPoint &&
          <>
            <div className="mb-20 mt-20 border-top-light pt-10"></div>
            <div className='row'>
              <div className='col-xl-3 fw-500'>
                Meeting point
              </div>
              <div className='col-xl-9'>
                <div className='mb-20'>
                  {data?.data[0]?.attributes?.meetingPoint?.description}
                </div>
                <Link rel='nofollow' style={{ textDecoration: 'underline' }} href={data?.data[0]?.attributes?.meetingPoint?.mapLink}>Google Maps ile aç <i style={{ position: 'relative', top: '2px' }} className='icon icon-arrow-right'></i> </Link>
              </div>
            </div>
          </>
        }
        {
          data?.data[0]?.attributes?.importantInformation?.length > 0 &&
          <>
            <div className="mb-20 mt-20 border-top-light pt-10"></div>
            <div className='row'>
              <div className='col-xl-3 fw-500'>
                Important information
              </div>
              <div className='col-xl-9'>
                {
                  data?.data[0]?.attributes?.importantInformation?.map((itm, i) => {
                    return (
                      <div className={i > 0 ? "mt-20" : ""} key={i}>
                        <div className='fw-500'>{itm?.title}</div>
                        <ul style={{ listStyle: 'inside' }}>
                          {
                            itm?.article?.map((item, x) => {
                              return (
                                <li key={x} style={{ listStyle: 'inside' }}>{item?.name}</li>
                              )
                            })
                          }
                        </ul>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </>
        }
        {
          data?.data[0]?.attributes?.cancellation &&
          <>
            <div className="mb-20 mt-20 border-top-light pt-10"></div>
            <div className='row'>
              <div id='cancellation' className='col-xl-3 fw-500'>
                Cancellation
              </div>
              <div className='col-xl-9'>
                <div style={{ whiteSpace: 'pre-line', display: cancellationView ? '' : '-webkit-box', WebkitLineClamp: cancellationView ? '' : '4', WebkitBoxOrient: cancellationView ? '' : 'vertical', overflow: cancellationView ? '' : 'hidden', textOverflow: cancellationView ? '' : 'ellipsis' }}>
                  {data?.data[0]?.attributes?.cancellation}
                </div>
                <button onClick={() => setCancellationView(!cancellationView)} style={{ textDecoration: 'underline' }}>{cancellationView ? "See less" : "See more"}</button>
              </div>
            </div>
          </>
        }
      </div>

      {/* <div>
        <h3 className='text-22 fw-500 pt-30 mt-40 border-top-light'>Specifications</h3>
        <Specifications data={data} />
      </div> */}
    </>
  );
};

export default Overview;
