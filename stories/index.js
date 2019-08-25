import React, {useState} from 'react';
import { storiesOf } from '@storybook/react';

import CustomItemsStory from './CustomItems/CustomItemsStory'
import SimpleItemsStory from './SimpleItemsStory/SimpleItemsStory'

storiesOf('Simple DragList', module)
  .add('Plain List', () => {
    return <SimpleItemsStory/>
  })
  .add('React component list', () => {
    return <CustomItemsStory/>
  })
