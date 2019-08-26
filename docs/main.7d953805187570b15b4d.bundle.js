(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(16),__webpack_require__(73),__webpack_require__(34),__webpack_require__(494),__webpack_require__(136),__webpack_require__(2),__webpack_require__(168),__webpack_require__(495),__webpack_require__(71),__webpack_require__(35);var react=__webpack_require__(1),react_default=__webpack_require__.n(react);__webpack_require__(496);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var components_Draggable_Draggable=function(props){var modified=null,makeDraggable={onDragStart:function dragStart(event){var current=event.target;current.classList.add("draggingOn"),event.dataTransfer.effectAllowed="move",event.dataTransfer.setData("text/html",current),props.updateCurrentDraggableHandler(props.children.key)},onDragEnd:function dragEnd(event){event.target.classList.remove("draggingOn"),props.onDragEndHandler(event)},draggable:!0,id:props.identificator};return react_default.a.isValidElement(props.children)&&(modified="string"==typeof props.children.type?react_default.a.cloneElement(props.children,function _objectSpread(target){for(var source,i=1;i<arguments.length;i++)source=null==arguments[i]?{}:arguments[i],i%2?ownKeys(source,!0).forEach(function(key){_defineProperty(target,key,source[key])}):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(source).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))});return target}({},makeDraggable,{className:[props.children.props.className,"isDraggable"].join(" ")})):react_default.a.cloneElement(props.children,{makeDraggable:makeDraggable,className:[props.children.props.className,"isDraggable"].join(" ")})),modified};__webpack_require__(22),__webpack_require__(25),__webpack_require__(31),__webpack_require__(23),__webpack_require__(47),__webpack_require__(21),__webpack_require__(27),__webpack_require__(28);function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var DragList=function(props){var _useState2=_slicedToArray(Object(react.useState)(null),2),currentDraggableId=_useState2[0],setCurrentDraggableId=_useState2[1],_useState4=_slicedToArray(Object(react.useState)(null),2),currentDragOver=_useState4[0],setCurrentDragOver=_useState4[1],onDragEndHandler=function(event){var target=event.target;currentDragOver&&(props.onNewOrder(target.id,currentDragOver.id),currentDragOver.classList&&currentDragOver.classList.remove("draggedOver")),setCurrentDragOver(null),setCurrentDraggableId(null)},updateCurrentDraggableHandler=function(draggable){setCurrentDraggableId(draggable)};return react_default.a.createElement("div",{id:"DragListContainer",onDragOver:function dragOverHandler(event){event.preventDefault();var target=event.target;target.id!==currentDraggableId&&"DragListContainer"!==target.id&&(currentDragOver&&currentDragOver.classList&&currentDragOver.classList.remove("draggedOver"),target.classList.add("draggedOver"),setCurrentDragOver(target))}},props.children.map(function(item){return react_default.a.createElement(components_Draggable_Draggable,{identificator:item.key,key:item.key,updateCurrentDraggableHandler:updateCurrentDraggableHandler,onDragEndHandler:onDragEndHandler},item)}))};DragList.displayName="DragList";var DragList_DragList=DragList;DragList.__docgenInfo={description:"",methods:[],displayName:"DragList"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DragList/DragList.js"]={name:"DragList",docgenInfo:DragList.__docgenInfo,path:"src/components/DragList/DragList.js"});var components_DragList=DragList_DragList;__webpack_require__.d(__webpack_exports__,"a",function(){return components_DragList})},224:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(16),__webpack_require__(22),__webpack_require__(25),__webpack_require__(68),__webpack_require__(98),__webpack_require__(31),__webpack_require__(23),__webpack_require__(47),__webpack_require__(222),__webpack_require__(70),__webpack_require__(86),__webpack_require__(48),__webpack_require__(21),__webpack_require__(72),__webpack_require__(27),__webpack_require__(28);var _src__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(100),react__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_17___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_17__);function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++)arr2[i]=arr[i];return arr2}}(arr)||function _iterableToArray(iter){if(Symbol.iterator in Object(iter)||"[object Arguments]"===Object.prototype.toString.call(iter))return Array.from(iter)}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function _extends(){return(_extends=Object.assign||function(target){for(var source,i=1;i<arguments.length;i++)for(var key in source=arguments[i])Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key]);return target}).apply(this,arguments)}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var listItemStyle={textAlign:"center",color:"white",padding:"10px",margin:"2px",backgroundColor:"#e91e63"},CustomItemsStory=function(){var _useState2=_slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_17__.useState)(["A","B","C","D"]),2),items=_useState2[0],setItems=_useState2[1],ListItem=function(props){return react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div",_extends({},props.makeDraggable,{style:listItemStyle}),props.name)},listItems=items.map(function(item){return react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(ListItem,{key:item,name:item})});return react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_16__.a,{onNewOrder:function onNewOrder(draggedItem,dropOntoItem){var first=items.indexOf(draggedItem),second=items.indexOf(dropOntoItem),newItemOrder=_toConsumableArray(items);newItemOrder.splice(first,1),newItemOrder.splice(second,0,items[first]),setItems(newItemOrder)}},listItems))};CustomItemsStory.displayName="CustomItemsStory",__webpack_exports__.a=CustomItemsStory,CustomItemsStory.__docgenInfo={description:"",methods:[],displayName:"CustomItemsStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/CustomItems/CustomItemsStory.js"]={name:"CustomItemsStory",docgenInfo:CustomItemsStory.__docgenInfo,path:"stories/CustomItems/CustomItemsStory.js"})},225:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(16),__webpack_require__(22),__webpack_require__(25),__webpack_require__(68),__webpack_require__(98),__webpack_require__(31),__webpack_require__(23),__webpack_require__(47),__webpack_require__(222),__webpack_require__(70),__webpack_require__(21),__webpack_require__(72),__webpack_require__(27),__webpack_require__(28);var _src__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(100),react__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_15___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__);function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++)arr2[i]=arr[i];return arr2}}(arr)||function _iterableToArray(iter){if(Symbol.iterator in Object(iter)||"[object Arguments]"===Object.prototype.toString.call(iter))return Array.from(iter)}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var SimpleItemsStory=function(){var _useState2=_slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_15__.useState)(["A","B","C","D"]),2),items=_useState2[0],setItems=_useState2[1],listItems=items.map(function(item){return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("li",{key:item},item)});return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_14__.a,{onNewOrder:function onNewOrder(draggedItem,dropOntoItem){var first=items.indexOf(draggedItem),second=items.indexOf(dropOntoItem),newItemOrder=_toConsumableArray(items);newItemOrder.splice(first,1),newItemOrder.splice(second,0,items[first]),setItems(newItemOrder)}},listItems))};SimpleItemsStory.displayName="SimpleItemsStory",__webpack_exports__.a=SimpleItemsStory,SimpleItemsStory.__docgenInfo={description:"",methods:[],displayName:"SimpleItemsStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/SimpleItemsStory/SimpleItemsStory.js"]={name:"SimpleItemsStory",docgenInfo:SimpleItemsStory.__docgenInfo,path:"stories/SimpleItemsStory/SimpleItemsStory.js"})},226:function(module,exports,__webpack_require__){__webpack_require__(227),__webpack_require__(330),module.exports=__webpack_require__(331)},331:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(99);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(function loadStories(){__webpack_require__(493)},module)}.call(this,__webpack_require__(166)(module))},493:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(99),_CustomItems_CustomItemsStory__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(224),_SimpleItemsStory_SimpleItemsStory__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(225),_ref=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SimpleItemsStory_SimpleItemsStory__WEBPACK_IMPORTED_MODULE_3__.a,null),_ref2=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CustomItems_CustomItemsStory__WEBPACK_IMPORTED_MODULE_2__.a,null);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Simple DragList",module).add("Plain List",function(){return _ref}).add("React component list",function(){return _ref2})}.call(this,__webpack_require__(166)(module))},496:function(module,exports,__webpack_require__){var content=__webpack_require__(497);"string"==typeof content&&(content=[[module.i,content,""]]);var options={hmr:!0,transform:void 0,insertInto:void 0};__webpack_require__(499)(content,options);content.locals&&(module.exports=content.locals)},497:function(module,exports,__webpack_require__){(module.exports=__webpack_require__(498)(!1)).push([module.i,".isDraggable {\n    cursor: -webkit-grab;\n    cursor: grab;\n}\n\n.draggingOn {\n    opacity: 0.2;\n    cursor: -webkit-grabbing;\n    cursor: grabbing;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n}\n",""])}},[[226,1,2]]]);
//# sourceMappingURL=main.7d953805187570b15b4d.bundle.js.map