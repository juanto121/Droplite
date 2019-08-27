import DragList from "../../src"
import React, {useState} from "react";

const SimpleItemsStory = (props) => {

  const [items, setItems] = useState(["A", "B", "C", "D"])

  // Requirement 1: add unique key
  const listItems = items.map(item =><li key={item}>{item}</li>)

  // Requirement 2: Implement on new order Handler
  const onNewOrder = (draggedItem, dropOntoItem) => {
    const first = items.indexOf(draggedItem)
    const second = items.indexOf(dropOntoItem)
    const newItemOrder = [...items]
    newItemOrder.splice(first, 1)
    newItemOrder.splice(second, 0, items[first])
    setItems(newItemOrder)
  }

  // Requirement 3: Wrap the list with DragList HOC
  // Requirement 4: pass onNewOrder handler as prop
  return (
    <div>
      <DragList onNewOrder={onNewOrder}>
        {listItems}
      </DragList>
    </div>
  )

}

export default SimpleItemsStory
