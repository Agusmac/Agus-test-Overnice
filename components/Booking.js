import * as React from "react"

const Booking = () => (
  <div>
    <div className="scroll-animation bg-blueish translate-y-36 relative z-10">
      <svg xmlns="http://www.w3.org/2000/svg" width={120} height={424}>
        <g className="booking-tool">
          <rect width={120} height={52} y={300} fill="#8D65FF" className="violet" rx={2} />
          <rect width={120} height={48} y={376} fill="#45E3BE" className="green" rx={2} />
          <rect width={120} height={12} y={128} fill="#2FBDEA" className="blue" opacity={0.8} rx={2} />
          <rect width={120} height={36} y={248} fill="#2FBDEA" className="blue" opacity={0.4} rx={2} />
          <rect width={120} height={16} y={156} fill="#2FBDEA" className="blue" opacity={0.3} rx={2} />
          <rect width={120} height={36} y={188} fill="#FFBB56" className="orange" rx={2} />
          <rect width={120} height={104} fill="#2FBDEA" className="blue" opacity={0.8} rx={2} />
        </g>
      </svg>
    </div>
    <div className="relative mt-4">
      <p className="grid-b-text">Booking Tool</p>
      <p className="hover-text-green absolute text-green-grid inset-0 opacity-0">Infrastructure</p>
    </div>
  </div>
)
export default Booking
