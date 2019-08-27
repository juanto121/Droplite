# Droplite


![](https://juantorres-personal-bucket.s3.amazonaws.com/Droplite/Droplite.svg)


Light react component to add drag and drop functionality to your lists.

![](https://img.shields.io/bundlephobia/min/droplite)
![](https://img.shields.io/npm/v/droplite)

### Usage

Install the package with ```npm install droplite```

There are four basic requirements

```js
const MyComponent = (props) => {
  const [items, setItems] = useState(["A", "B", "C", "D"])

  // Requirement 1: add unique key
  const listItems = items.map(item =><li key={item}>{item}</li>)

  // Requirement 2: Implement on new order Handler
  const onNewOrder = (draggedItem, dropOntoItem) => {
    const newItemOrder = [...items]
    const draggedItemIndex = items.indexOf(draggedItem) 
    newItemOrder.splice(draggedItemIndex, 1)
    newItemOrder.splice(items.indexOf(dropOntoItem), 0, items[draggedItemIndex])
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
```


### Samples

See [Storybooks](https://juanto121.github.io/Droplite/?path=/story/simple-draglist--plain-list)


### Under the hood

Droplite depends on the [HTML Drag and Drop API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API).

`DragList` component manages internal state of the drag and drop operation.
The key function in `DragList` is the `dragOverHandler` that takes care of which element is being dragged over that can later be displaced. Once the `onDragEndHandler` is triggered, the current dragged element and the one below it (the draggedOver) are passed onto the `onNewOrder` handler.

`Draggable` is just a wrapper for your custom defined components that injects props and css classes that are required to start managing the drag and drop event listeners.

Support for mobile devices is not considered.

### Todo

Smooth animations 
