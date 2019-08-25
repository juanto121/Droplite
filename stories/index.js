import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('Simple DragList', module)
  .add('Plain List', () => {
    const listItems = ["A", "B", "C", "D"].map(item => <li>{item}</li>)
    return (
      <ul>
        {listItems}
      </ul>
    )
  })
  .add('React component list', () => {
    const listItemStyle = {textAlign:'center', color: 'white', padding:'10px', margin: '2px', 'backgroundColor': '#e91e63'}
    const ListItem = (props) => {
      return (<div style={listItemStyle}>{props.name}</div>)
    }
    const listItems = ["A", "B", "C", "D"].map(item => <ListItem name={item}/>)
    return (
      <div>
        {listItems}
      </div>
    )
  })
