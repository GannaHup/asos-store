import React from "react"
import PropTypes from "prop-types"
import { Icons } from "../type"

const ChevronIcon = (props: Icons) => {
  const { color } = props
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.34981 7.26655C4.10573 7.51063 4.10573 7.90636 4.34981 8.15044L9.55814 13.3588C9.80222 13.6028 10.1979 13.6028 10.442 13.3588L15.6504 8.15044C15.8944 7.90636 15.8944 7.51063 15.6504 7.26655C15.4063 7.02248 15.0106 7.02248 14.7665 7.26655L10.0001 12.0329L5.23369 7.26655C4.98961 7.02248 4.59388 7.02248 4.34981 7.26655Z"
        fill={color}
      />
    </svg>
  )
}

ChevronIcon.propTypes = {
  color: PropTypes.string,
}
ChevronIcon.defaultProps = {
  color: "#24292F",
}

export default ChevronIcon
