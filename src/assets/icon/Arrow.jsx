import React from 'react'

const Arrow = ({
  width = '24px',
  height = '24px',
  color = 'black',
  strokeWidth = '0',
}) => {
  return (
    <svg
      stroke='currentColor'
      fill={color}
      strokeWidth={strokeWidth}
      viewBox='0 0 24 24'
      height={height}
      width={width}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M18.25 15.5a.75.75 0 0 1-.75-.75V7.56L7.28 17.78a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L16.44 6.5H9.25a.75.75 0 0 1 0-1.5h9a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-.75.75Z' />
    </svg>
  )
}

export default Arrow
