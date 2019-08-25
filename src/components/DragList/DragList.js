import React from 'react'
import Draggable from './Draggable'

const DragList = (props) => {

  const dragOverHandler = (event) => { }

  const onDragEndHandler = (event) => { }

  const updateCurrentDraggableHandler = (draggable) => { }

  return (
    <div onDragOver={dragOverHandler}>
      {
        props.children.map((item) => {
          return (
            <Draggable>
              {item}
            </Draggable>
          )
        })
      }
    </div>
  )
}

export default DragList
