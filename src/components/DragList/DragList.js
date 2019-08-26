import React, { useState } from 'react'
import Draggable from '../Draggable/Draggable.js'

const DragList = (props) => {

  const LIST_CONTAINER_ID = 'DragListContainer'
  const [currentDraggableId, setCurrentDraggableId] = useState(null)
  const [currentDragOver, setCurrentDragOver] = useState(null)

  const dragOverHandler = (event) => {
    event.preventDefault()
    const target = event.target
    if (target.id !== LIST_CONTAINER_ID)
    {
      if(target.id !== currentDraggableId) {
        if (currentDragOver && currentDragOver.classList && currentDragOver.id !== target.id) {
          // Remove .dragover on old item
          currentDragOver.classList.remove('draggedOver')
        } else {
          // Draggin over new item
          target.classList.add('draggedOver')
        }
      } else {
        if (currentDragOver && currentDragOver.classList && currentDragOver.id !== target.id) {
          // Remove .dragover on old item when initial does not move
          currentDragOver.classList.remove('draggedOver')
        }
      }
      setCurrentDragOver(target)
    }
  }

  const onDragEndHandler = (event) => {
    const target = event.target
    if(currentDragOver) {
      props.onNewOrder(target.id, currentDragOver.id)
      if(currentDragOver.classList)
        currentDragOver.classList.remove('draggedOver')
    }
    setCurrentDragOver(null)
    setCurrentDraggableId(null)
  }

  const updateCurrentDraggableHandler = (draggable) => {
    setCurrentDraggableId(draggable)
  }



  return (
    <div id={LIST_CONTAINER_ID} onDragOver={dragOverHandler}>
      {
        props.children.map((item) => {
          return (
            <Draggable
              identificator={item.key}
              key={item.key}
              updateCurrentDraggableHandler={updateCurrentDraggableHandler}
              onDragEndHandler={onDragEndHandler}
            >
              {item}
            </Draggable>
          )
        })
      }
    </div>
  )
}

export default DragList
