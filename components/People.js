import * as React from "react"
const People = () => (
    <div>
        <div className="scroll-animation bg-blueish translate-y-12">
            <svg xmlns="http://www.w3.org/2000/svg" width={120} height={408}>
                <g className="people-os">
                    <rect width={120} height={12} y={396} fill="#45E3BE" className="green" rx={2} />
                    <rect width={120} height={24} y={160} fill="#2FBDEA" className="blue" opacity={0.8} rx={2} />
                    <rect width={120} height={12} y={284} fill="#2FBDEA" className="blue" opacity={0.3} rx={2} />
                    <rect width={120} height={12} y={200} fill="#2FBDEA" className="blue" opacity={0.8} rx={2} />
                    <rect width={120} height={56} y={316} fill="#FFBB56" className="orange" rx={2} />
                    <rect width={120} height={36} y={232} fill="#8D65FF" className="violet" rx={2} />
                    <rect width={120} height={72} y={64} fill="#2FBDEA" className="blue" opacity={0.4} rx={2} />
                    <rect width={120} height={40} fill="#2FBDEA" className="blue" opacity={0.8} rx={2} />
                </g>
            </svg>
        </div>
        <p className="mt-4 grid-b-text">People OS</p>
    </div>
)
export default People
