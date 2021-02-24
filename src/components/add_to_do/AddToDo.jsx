import React, { useRef } from 'react';
import styles from './add_to_do.module.css'

const AddToDo = ({onAdd,color}) => {

    const formRef = useRef();
    const inputRef = useRef();
    const addToDo = (event)=>{
        event.preventDefault();
        const name = inputRef.current.value;
        name&&onAdd(name);

        formRef.current.reset();
    }

    return (
        <form
            ref={formRef}
            onSubmit={addToDo}
            className={styles.add_form}>
                <input
                type="text"
                ref={inputRef}
                className='list_input'
                name="list_name"
                style={{color:color}}
                placeholder='할일을 적어주세요'/>
                <button>추가</button>
        </form>
    );
};

export default AddToDo;