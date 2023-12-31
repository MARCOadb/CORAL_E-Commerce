const ChevronRightSmallsvg = ({ stroke, width, height, rotate, onClick }) => {
  return (
    <svg
      width={width ? width : "24"}
      height={height ? height : "24"}
      style={{ transition: "0.25s cubic-bezier(1, 0, 0, 1), height 0.25s cubic-bezier(1, 0, 0, 1)" }}
      transform={rotate && `rotate(${rotate})`}
      onClick={onClick && onClick}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="icon/chevron-right-small">
        <path id="Vector" d="M10 8L14 12L10 16" stroke={stroke ? stroke : "#000"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_2378_7701">
          <rect width={width ? width : "24"} height={height ? height : "24"} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ChevronRightSmallsvg;
