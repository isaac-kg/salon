import React, { FC } from "react"

interface SkeletonLoaderProps {
  height?: string;
  width?: string
}

const SkeletonLoader: FC<SkeletonLoaderProps> = ({ height = 0, width = 0 }) => {
  return (
    <div
      className="skeleton__loader"
      style={{ height: height, width: width }}
    ></div>
  )
}

export default SkeletonLoader
