import React from "react";
import PropTypes from "prop-types";
import { Icons } from "../type";

const FilterIcon = (props: Icons) => {
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
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M21.7349 22.2574L30.5 9.16455H9.5L18.2665 22.256V34.6646L21.7349 32.573V22.2574Z"
        fill={color}
      />
    </svg>
  );
};

FilterIcon.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
};
FilterIcon.defaultProps = {
  color: "black",
  width: 40,
  height: 40
};

export default FilterIcon;
