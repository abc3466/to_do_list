import React from 'react';
import styles from './todo.module.css'

const ToDo = React.memo(({list,onDelite,onCheck}) => {

    const handleListDelite = ()=>{
        onDelite(list);
    }

    const handleCheck =()=>{
        onCheck(list);
    }
    //console.log(list)
    return (
        <li className={styles.list} onClick={handleCheck}>
            <div
                onClick={(e)=>{e.stopPropagation(); handleListDelite()}}
                className={styles.delite}>X
            </div>

            <div
                style={{color:list.color}}
                className={`${styles.name} ${list.check&&styles.checked}`}>
                {list.name}
            </div>

            <div
                className={`${styles.check} ${list.check&&styles.checked}`}>
                &#x2713;
            </div>
        </li>
    );
});

export default ToDo;