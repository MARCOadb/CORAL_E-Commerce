const MinusSvg = ({ stroke, rotate, onClick }) => {

    return (

        <svg onClick={onClick && onClick} xmlns="http://www.w3.org/2000/svg" transform={`rotate(${rotate}) all`} width="24" height="24" viewBox="0 0 24 24" fill="none">
            <g clip-path="url(#clip0_3437_815)">
                <path d="M17 12L7 12" stroke={stroke ? stroke : "#13101E"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_3437_815">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
};

export default MinusSvg;