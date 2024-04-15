import * as React from "react"
const Food = () => (
  <div>
    <div className="scroll-animation bg-blueish translate-y-16 relative z-10">
    <p className="hover-text-blue text-blue-grid absolute -top-10 whitespace-nowrap opacity-0">Basic Features</p>
      <svg xmlns="http://www.w3.org/2000/svg" width={120} height={296} fill="none">
        <g className="food-delivery">
          <rect width={120} height={12} y={284} fill="#45E3BE" className="green" rx={2} />
          <rect width={120} height={12} y={144} fill="#2FBDEA" className="blue" opacity={0.8} rx={2} />
          <rect width={120} height={84} y={180.004} fill="#8D65FF" className="violet" rx={2} />
          <rect width={120} height={76} y={48} fill="#2FBDEA" className="blue" opacity={0.2} rx={2} />
          <rect width={120} height={32} fill="#2FBDEA" className="blue" opacity={0.8} rx={2} />
        </g>
      </svg>
    </div>
    <div className="relative mt-4">
      <p className="grid-b-text">Food Delivery</p>
      <p className="hover-text-violet absolute text-violet-grid inset-0 opacity-0 whitespace-nowrap">3rd party stuff</p>
    </div>
  </div>
)
export default Food
