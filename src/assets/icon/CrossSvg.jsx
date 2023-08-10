const CrossSvg = ({ stroke, width, height, onClick }) => {
  return (
    <svg onClick={onClick} width={width ? width : "24"} height={height ? height : "24"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_2987_1045)">
        <path d="M6.16638 6.16638L17.8336 17.8336" stroke={stroke ? stroke : "#1B4B66"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.8336 6.16638L6.16636 17.8336" stroke={stroke ? stroke : "#1B4B66"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_2987_1045">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default CrossSvg;
