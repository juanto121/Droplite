import {DragList} from "../../src";
import React, {useState} from "react";

const listItemStyle = {
  textAlign: 'center',
  color: 'white',
  padding: '10px',
  margin: '2px',
  'backgroundColor': '#e91e63'
}

const CustomItemsStory = (props) => {

  const [items, setItems] = useState(["A", "B", "C", "D"])


  // Requirement 1: to spread props.makeDraggable
  const ListItem = (props) => {
    return (<div {...props.makeDraggable} style={ listItemStyle }>{props.name}</div>)
  }

  // Requirement 2: add unique key
  const listItems = items.map(item => <ListItem key={item} name={item}/>)


  // Requirement 3: Implement onNewOrder handler
  const onNewOrder = (draggedItem, dropOntoItem) => {
    const first = items.indexOf(draggedItem)
    const second = items.indexOf(dropOntoItem)
    const newItemOrder = [...items]
    newItemOrder.splice(first, 1)
    newItemOrder.splice(second, 0, items[first])
    setItems(newItemOrder)
  }

  // Requirement 4: Wrap the list in a DragList component and pass onNewOrder prop
  return (
    <div>
      <DragList onNewOrder={onNewOrder}>
        {listItems}
      </DragList>
    </div>
  )

}

export default CustomItemsStory
