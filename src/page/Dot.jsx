export function Dot() {
    return (
        <div className="text-white mt-[12.8%]  pr-2" >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-1 h-1"
                fill="white"
            >
                <circle cx="12" cy="12" r="10" /> {/* white circle */}
                <circle cx="8" cy="12" r="1.5" /> {/* white dot 1 */}
                <circle cx="12" cy="12" r="1.5" /> {/* white dot 2 */}
                <circle cx="16" cy="12" r="1.5" /> {/* white dot 3 */}
            </svg>
        </div>
    )
}