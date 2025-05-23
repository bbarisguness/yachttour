import Image from "next/image";
import { photoFormatsDetect } from "../../../utils/photoFormatsDetect";

const BookingDetails = ({ dataa, rezOpt }) => {
  return (
    <div className="px-30 py-30 border-light rounded-4">
      <div className="text-20 fw-500 mb-30">Your tour details</div>
      <div className="row x-gap-15 y-gap-20">
        <div className="col-auto">
          <Image
            width={140}
            height={140}
            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${photoFormatsDetect(dataa?.attributes?.images?.data[0], 'medium')?.url}`}
            alt="image"
            className="size-140 rounded-4 object-cover"
          />
        </div>
        {/* End .col */}
        <div className="col">
          <div className="lh-17 fw-500">
            {dataa?.attributes?.title}
          </div>
          <div className="text-14 lh-15 mt-5">{dataa?.attributes?.destinations?.data[0]?.attributes?.name}{dataa?.attributes?.destinations?.data[1]?.attributes?.name && ','} {dataa?.attributes?.destinations?.data[1]?.attributes?.name}</div>
          <div className="row x-gap-10 y-gap-10 items-center pt-10">
            {/* <div className="col-auto">
              <div className="d-flex items-center">
                <div className="text-14 fw-400">3,014 reviews</div>
              </div>
            </div> */}
            <div style={{ justifyContent: 'space-between' }} className="col-auto">
              <div className="text-14 fw-500">€{dataa?.attributes?.price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</div>
            </div>
          </div>
        </div>
        {/* End .col */}
      </div>
      {/* End .row */}

      <div className="border-top-light mt-30 mb-20" />
      <div className="row y-gap-20 justify-between items-center">
        <div className="col-auto">
          <div className="text-15">Check in:</div>
          <div className="fw-400">{rezOpt?.m < 10 ? `0${rezOpt?.m}` : rezOpt?.m}.{rezOpt?.d < 10 ? `0${rezOpt?.d}` : rezOpt?.d}.{rezOpt?.y} {rezOpt?.om ? `- ${rezOpt?.om < 10 ? `0${rezOpt?.om}` : rezOpt?.om}.${rezOpt?.od < 10 ? `0${rezOpt?.od}` : rezOpt?.od}.${rezOpt?.oy}` : ''}</div>
        </div>
        <div className="col-auto">
          <div className="text-15">{rezOpt?.t} {rezOpt?.et ? `- ${rezOpt?.et}` : ''}</div>
        </div>
      </div>
      {/* End row */}

      <div className="border-top-light mt-30 mb-20" />
      <div>
        <div className="text-15">Person:</div>
        <div className="fw-500">{rezOpt?.p} person</div>
      </div>

      <div className="border-top-light mt-30 mb-20" />
      <div>
        <div className="text-15">Port:</div>
        <div className="fw-500">{rezOpt?.l}</div>
      </div>

      <div className="border-top-light mt-30 mb-20" />
      <div className="row y-gap-20 justify-between items-center">
        <div className="col-auto">
          <div className="text-15">Total price:</div>
          <div className="fw-500">€{(rezOpt?.p * dataa?.attributes?.price)?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</div>
        </div>
      </div>
      {/* End row */}
    </div>
    // End px-30
  );
};

export default BookingDetails;
