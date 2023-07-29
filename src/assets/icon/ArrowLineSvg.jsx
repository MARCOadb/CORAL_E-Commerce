const ArrowLineSvg = ({ stroke, width, height, rotate, onClick, viewBox }) => {
  return (
    <svg
      onClick={onClick}
      width={width ? width : "24"}
      height={height ? height : "24"}
      viewBox={viewBox ? viewBox : "0 0 24 24"}
      fill="none"
      transform={`rotate(${rotate})`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5.5 12.5H19.5M19.5 12.5L15 8M19.5 12.5L15 17" stroke={stroke ? stroke : "white"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};
export default ArrowLineSvg;
