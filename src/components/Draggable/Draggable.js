import React from 'react'
import './Draggable.css'

const Draggable = (props) => {

  const dragStart = (event) => {}

  const dragEnd = (event) => { }

  const modified = React.cloneElement(props.children, { })

  return modified
}

export default Draggable
