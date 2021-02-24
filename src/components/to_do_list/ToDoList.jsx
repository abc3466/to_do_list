import React from 'react';
import ToDo from '../to_do/ToDo';
import styles from './to_do_list.module.css'

const ToDoList = ({lists,onDelite,onCheck,color}) => {

    const handleListDelite = (list)=>{
        onDelite(list)
    }

    const handleCheck =(list)=>{
        onCheck(list)
    }

    return (
        <ul className={styles.list_box}>
            {lists.map(list=>
                <ToDo
                key={list.id}
                list={list}
                onDelite={handleListDelite}
                onCheck={handleCheck}
                color={color}
                />)}
        </ul>
    )
};

export default ToDoList;