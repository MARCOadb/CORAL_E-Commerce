const TrashSvg = ({ stroke, width, height }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width ? width : '24px'} height={height ? height : '24px'} viewBox="0 0 24 24" fill="none">
            <path d="M14.8333 7.2V6.56C14.8333 5.66392 14.8333 5.21587 14.6517 4.87362C14.4919 4.57256 14.2369 4.32779 13.9233 4.17439C13.5668 4 13.1001 4 12.1667 4H10.8333C9.89991 4 9.4332 4 9.07668 4.17439C8.76308 4.32779 8.50811 4.57256 8.34832 4.87362C8.16667 5.21587 8.16667 5.66392 8.16667 6.56V7.2M9.83333 11.6V15.6M13.1667 11.6V15.6M4 7.2H19M17.3333 7.2V16.16C17.3333 17.5041 17.3333 18.1762 17.0608 18.6896C16.8212 19.1412 16.4387 19.5083 15.9683 19.7384C15.4335 20 14.7335 20 13.3333 20H9.66667C8.26654 20 7.56647 20 7.03169 19.7384C6.56129 19.5083 6.17883 19.1412 5.93915 18.6896C5.66667 18.1762 5.66667 17.5041 5.66667 16.16V7.2" stroke={stroke ? stroke : "#B00020"} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
};


export default TrashSvg;