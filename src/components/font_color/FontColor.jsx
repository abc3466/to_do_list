import React from 'react';
import styles from './font_color.module.css';

const SelectColor = ({color,active,onColor}) =>{
   // console.log(color)
    const handleColor =()=>{
        onColor(color);
    }

    return (
        <li
            className={`${styles.color} ${active&&styles.active}`} onClick={handleColor} style={{background:color}}>
        </li>
    )
}

const FontColor = ({onColor,colors,selected}) => {
    //console.log(selected)
    const handleColor = (color)=>{
        onColor(color)
    }
    //console.log(selected)

    return (
        <ul className={styles.select}>
        {colors.map((color)=>(
            <SelectColor
                color={color}
                active={selected===color}
                onColor={handleColor}
                key={color}/>))}
        </ul>
    );
};

export default FontColor;