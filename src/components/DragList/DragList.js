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
          console.log('Remove drag over old item', currentDragOver.id)
          currentDragOver.classList.remove('draggedOver')
        } else {
          console.log('Dragin over new item', target.id)
          target.classList.add('draggedOver')
        }
      } else {
        if (currentDragOver && currentDragOver.classList && currentDragOver.id !== target.id) {
          console.log('Remove drag over old item when initial does not move', currentDragOver.id)
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
