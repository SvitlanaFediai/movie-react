import React from "react"
import Skeleton, {SkeletonTheme} from "react-loading-skeleton"

const MyLoader = (props) => {
  return (
    <Skeleton 
      speed={2}
      width={380}
      height={500}
      viewBox="0 0 400 500"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="0" y="60" rx="2" ry="2" width="380" height="500" />
    </Skeleton>
  )
}

export default MyLoader