import React from 'react';
import './styles.css'
const TextComponent:React.FC<any> =  ({input}) => {
    return (
        <p  className={'p'}>{input}</p>
    )
}
export default TextComponent;