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

  const modified = React.cloneElement(props.children, {
    makeDraggable: {
      style: { backgroundColor: 'red' },
      onDragStart: dragStart,
      onDragEnd: dragEnd,
      draggable: true,
      className: [props.children.props.className, 'isDraggable'].join(" "),
      id: props.id
    }
  })

  return modified
}

export default Draggable
