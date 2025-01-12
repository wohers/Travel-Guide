import React from 'react'

const Text = ({ className, children }) => {
  return (
    <div className={className}>
        <p>{children}</p>
    </div>
  )
}

export default Text