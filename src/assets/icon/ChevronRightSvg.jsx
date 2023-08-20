const ChevronRightSvg = ({ stroke, width, height, onClick, rotate }) => {

    return (

        <svg width={width ? width : "24"} height={height ? height : "24"} onClick={onClick && onClick} style={{ transition: '0.25s cubic-bezier(1, 0, 0, 1), height 0.25s cubic-bezier(1, 0, 0, 1)' }} transform={`rotate(${rotate})`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="Vector" d="M9 4.5L16.5 12L9 19.5" stroke={stroke ? stroke : "#626262"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
};


export default ChevronRightSvg;