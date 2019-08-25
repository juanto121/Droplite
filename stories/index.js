import React from 'react';
import { storiesOf } from '@storybook/react';
import { DragList, Draggable } from '../src'

storiesOf('Simple DragList', module)
  .add('Plain List', () => {

    const listItems = ["A", "B", "C", "D"].map(item => (props) => <li {...props.makeDraggable}>{item}</li>)

    return (
      <ul>
        <DragList>
          {listItems}
        </DragList>
      </ul>
    )

  })
  .add('React component list', () => {
    const listItemStyle = {textAlign:'center', color: 'white', padding:'10px', margin: '2px', 'backgroundColor': '#e91e63'}

    const ListItem = (props) => {
      return (<div {...props.makeDraggable} style={listItemStyle}>{props.name}</div>)
    }

    const listItems = ["A", "B", "C", "D"].map(item => <ListItem name={item}/>)

    return (
      <div>
        {listItems}
      </div>
    )
  })
