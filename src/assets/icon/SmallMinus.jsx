const SmallMinus = ({ stroke, onClick }) => {
  return (
    <svg onClick={onClick && onClick} xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
      <path d="M17.5 12L7.5 12" stroke={stroke ? stroke : "#171520"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default SmallMinus;
