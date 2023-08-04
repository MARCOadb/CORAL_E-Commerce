const ArrowSvg = ({ stroke, width, height, x, onClick }) => {
  return (
    <svg
      onClick={onClick}
      width={width ? width : "24"}
      height={height ? height : "24"}
      style={{ transition: 'transform 0.3s 0.3s' }}
      viewBox="0 0 24 24" fill="none"
      transform={`rotate(${x})`}
      xmlns="http://www.w3.org/2000/svg">
      <path d="M19.5 9L12 16.5L4.5 9" stroke={stroke ? stroke : "#626262"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};
export default ArrowSvg;
