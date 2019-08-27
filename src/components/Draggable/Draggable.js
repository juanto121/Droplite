import React from 'react'
import './Draggable.css'

const Draggable = (props) => {

  const dragStart = (event) => {
    const current = event.target
    current.classList.add('draggingOn')
    event.dataTransfer.effectAllowed = 'move'
    event.dataTransfer.setData('text/html', current)
    props.updateCurrentDraggableHandler(props.children.key)
  }

  const dragEnd = (event) => {
    const element = event.target
    element.classList.remove('draggingOn')
    props.onDragEndHandler(event)
  }

  let modified = null
  const makeDraggable = {
      onDragStart: dragStart,
      onDragEnd: dragEnd,
      draggable: true,
      id: props.identificator
  }

  if(React.isValidElement(props.children)) {
    // Only string elements are DOM nodes. The remaining are functions, classes or Fragments
    if(typeof(props.children.type) === 'string')
      modified = React.cloneElement(props.children, {
        ...makeDraggable,
        className: [props.children.props.className, 'isDraggable'].join(" ")
      })
    else {
      modified = React.cloneElement(props.children, {
        makeDraggable,
        className: [props.children.props.className, 'isDraggable'].join(" ")
      })
    }
  }

  return modified
}

export default Draggable
