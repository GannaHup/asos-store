import React from "react"
import PropTypes from "prop-types"
import { Icons } from "../type"

const SearchIcon = (props: Icons) => {
  const { color } = props
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.25 1C4.69365 1 1 4.69365 1 9.25C1 13.8063 4.69365 17.5 9.25 17.5C11.2581 17.5 13.0987 16.7825 14.5293 15.59L20.2197 21.2803C20.5126 21.5732 20.9874 21.5732 21.2803 21.2803C21.5732 20.9874 21.5732 20.5126 21.2803 20.2197L15.59 14.5293C16.7825 13.0987 17.5 11.2581 17.5 9.25C17.5 4.69365 13.8063 1 9.25 1ZM2.5 9.25C2.5 5.52208 5.52208 2.5 9.25 2.5C12.9779 2.5 16 5.52208 16 9.25C16 12.9779 12.9779 16 9.25 16C5.52208 16 2.5 12.9779 2.5 9.25Z"
      />
    </svg>
  )
}

SearchIcon.propTypes = {
  color: PropTypes.string,
}
SearchIcon.defaultProps = {
  color: "#24292F",
}

export default SearchIcon
