import React from 'react'
import customStyle from "./style.module.scss"

interface Props {
  loading?: boolean
}

const Loading:React.FC<Props> = ({loading}):JSX.Element => {
 
  return (
    <div className={customStyle.loadingContainer}>
        <div className={customStyle.loading} ></div>
    </div>
  )
}

export default Loading