import React from 'react';
import './styles.css'
const TextComponent:React.FC<any> =  ({myclick, input}) => {
    console.log(myclick);
    return (
        <div>
            {
                myclick === false ? <p  className={'p'}>{input}</p>: <div><p  className={'p1'}>{input}<div className={'line'}></div></p></div>}
        </div>
    )
}
export default TextComponent;