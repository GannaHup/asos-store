import React from "react";
import PropTypes from "prop-types";
import { Icons } from "../type";

const ChevronIcon = (props: Icons) => {
  const { color, width, height } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.69912 14.5326C8.21097 15.0208 8.21097 15.8122 8.69912 16.3004L19.1158 26.7171C19.6039 27.2052 20.3954 27.2052 20.8836 26.7171L31.3002 16.3004C31.7884 15.8122 31.7884 15.0208 31.3002 14.5326C30.8121 14.0445 30.0206 14.0445 29.5325 14.5326L19.9997 24.0654L10.4669 14.5326C9.97874 14.0445 9.18728 14.0445 8.69912 14.5326Z"
        fill={color}
      />
    </svg>
  );
};

ChevronIcon.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
};
ChevronIcon.defaultProps = {
  color: "#24292F",
  width: 24,
  height: 24
};

export default ChevronIcon;
