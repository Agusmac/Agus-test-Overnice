import * as React from "react"
const Telehealth = () => (
  <div>
    <div className="scroll-animation bg-blueish translate-y-16">
      <svg xmlns="http://www.w3.org/2000/svg" width={120} height={424} fill="none">
        <g className="telehealth">
          <rect width={120} height={48} y={100} fill="#2FBDEA" className="blue" opacity={0.2} rx={2} />
          <rect width={120} height={24} y={164} fill="#2FBDEA" className="blue" rx={2} />
          <rect width={120} height={80} y={212} fill="#2FBDEA" className="blue" rx={2} />
          <rect width={120} height={64} y={316} fill="#FFBB56" className="orange" rx={2} />
          <rect width={120} height={24} y={400} fill="#45E3BE" className="green" rx={2} />
          <rect width={120} height={12} y={72} fill="#2FBDEA" className="blue" opacity={0.8} rx={2} />
          <rect width={120} height={48} fill="#2FBDEA" className="blue" opacity={0.8} rx={2} />
        </g>
      </svg>
    </div>
    <p className="mt-4 grid-b-text">Telehealth</p>
  </div>
)
export default Telehealth
