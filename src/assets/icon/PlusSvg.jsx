const PlusSvg = ({ stroke, onClick, plus }) => {
  return (
    <svg onClick={onClick && onClick} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <g clipPath="url(#clip0_3437_849)">
        <path d={plus ? "M12 5L12 19" : "M19 12L5 12"} stroke={stroke ? stroke : "#13101E"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: "all 0.1s ease" }} />
        <path d="M19 12L5 12" stroke={stroke ? stroke : "#13101E"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_3437_849">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default PlusSvg;
