import { useState } from 'react';
import AddToDo from './components/add_to_do/AddToDo';
import Navbar from './components/navbar/navbar';
import ToDoList from './components/to_do_list/ToDoList';
import FontColor from './components/font_color/FontColor';
import './app.css';

const colors = ['#343a40', '#f03e3e', '#12b886', '#228ae6']

function App(props) {

  const [listsState,setLists] = useState({
    lists:[
      {id:2, name:'javascrtip 공부', check:false},
      {id:1, name:'React 공부하기', check:false},
      {id:3, name:'다하고 나서 쉬자', check:false},
  ],
  color:"#343a40"
});

  const handleListDelite = (list) =>{
    const lists = listsState.lists.filter(item=> item.id!==list.id)
    setLists({lists})
  }

  const handleAddList = (name)=>{
    //const lists = [...listsState.lists, {id:Date.now(),name,check:false}]
    const {lists,color} = listsState;
    setLists({
      lists: lists.concat({
        id:Date.now(),
        name,
        check:false,
        color:color
      }),
      color
    });
  }
  
  const handleCheck = (list)=>{
    const {color} = listsState;
    const lists = listsState.lists.map(item =>{
      if(item.id===list.id){
        return {...list, check:!list.check}
      }
      return item
    })
    //console.log({listsState})
    setLists({lists,color})
  }
  const handleColor = (color)=>{
    setLists({
      ...listsState, color
    })
    console.log(listsState)
  }
  return (

    <section className='wrap'>
      <Navbar/>
      <FontColor
        onColor={handleColor}
        colors={colors}
        selected={listsState.color}
      />
      <AddToDo
        onAdd={handleAddList}
        color={listsState.color}
        />
      <ToDoList
        lists={listsState.lists}
        colors={colors}
        onDelite={handleListDelite}
        onCheck={handleCheck}
        />
    </section>
  );
}

export default App;
