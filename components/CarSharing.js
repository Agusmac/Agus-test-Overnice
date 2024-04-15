import * as React from "react"
const CarSharing = () => (
  <div>
    <div className="scroll-animation bg-blueish translate-y-10 relative z-10">
      <svg xmlns="http://www.w3.org/2000/svg" width={120} height={428} fill="none">
        <g className="carsharing">
          <rect width={120} height={56} y={300} fill="#8D65FF" className="violet" rx={2} />
          <rect width={120} height={48} y={380} fill="#45E3BE" className="green" rx={2} />
          <rect width={120} height={12} y={124} fill="#2FBDEA" className="blue" opacity={0.8} rx={2} />
          <rect width={120} height={36} y={244} fill="#2FBDEA" className="blue" opacity={0.4} rx={2} />
          <rect width={120} height={20} y={156} fill="#2FBDEA" className="blue" opacity={0.3} rx={2} />
          <rect width={120} height={36} y={188} fill="#FFBB56" className="orange" rx={2} />
          <rect width={120} height={104} fill="#2FBDEA" className="blue" opacity={0.8} rx={2} />
        </g>
      </svg>
    </div>
    <p className="mt-4 grid-b-text">Carsharing</p>
  </div>
)
export default CarSharing
