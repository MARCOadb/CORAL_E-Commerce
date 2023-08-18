const SortSvg = ({ stroke, onClick }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" onClick={onClick && onClick} width="25" height="24" viewBox="0 0 25 24" fill="none">
      <path d="M14 15.7494L17.75 19.4994L21.4999 15.75" stroke={stroke ? stroke : "#171520"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17.75 10.4994V19.4994" stroke={stroke ? stroke : "#171520"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 11.9994H11.7499" stroke={stroke ? stroke : "#171520"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 5.99939H17.7499" stroke={stroke ? stroke : "#171520"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 17.9994H10.25" stroke={stroke ? stroke : "#171520"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};
export default SortSvg;
