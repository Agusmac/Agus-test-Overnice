import * as React from "react"
const Social = () => (
  <div>
    <div className="scroll-animation bg-blueish translate-y-48">
      <svg xmlns="http://www.w3.org/2000/svg" width={120} height={380} fill="none">
        <g className="social-platform">
          <rect width={120} height={76} y={304} fill="#45E3BE" className="green" rx={2} />
          <rect width={120} height={12} y={60} fill="#2FBDEA" className="blue" opacity={0.3} rx={2} />
          <rect width={120} height={12} y={172} fill="#2FBDEA" className="blue" opacity={0.3} rx={2} />
          <rect width={120} height={12} y={196} fill="#2FBDEA" className="blue" opacity={0.8} rx={2} />
          <rect width={120} height={52} y={104.004} fill="#8D65FF" className="violet" rx={2} />
          <rect width={120} height={56} y={224} fill="#FFBB56" className="orange" rx={2} />
          <rect width={120} height={36} fill="#2FBDEA" className="blue" opacity={0.8} rx={2} />
        </g>
      </svg>
    </div>
    <p className="mt-4 grid-b-text">Social Platform</p>
  </div>
)
export default Social
