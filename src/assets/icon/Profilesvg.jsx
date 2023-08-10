const ProfileSvg = ({ stroke, width, height, navMovile, onClick }) => {

    return (

        <svg width={width ? width : "24"} height={height ? height : "24"} onClick={onClick && onClick} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_2378_7701)">
                <path d="M3 20C5.33579 17.5226 8.50702 16 12 16C15.493 16 18.6642 17.5226 21 20M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z" stroke={stroke ? stroke : navMovile ? "#b6b6b6" : "#13101E"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_2378_7701">
                    <rect width={width ? width : "24"} height={height ? height : "24"} fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
};

export default ProfileSvg;

