const ArrowPointerSvg = ({ stroke, onClick }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none" onClick={onClick && onClick}>
            <path d="M5.5 12.5H19.5M19.5 12.5L15 8M19.5 12.5L15 17" stroke={stroke ? stroke : "#1b4b66"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export default ArrowPointerSvg;