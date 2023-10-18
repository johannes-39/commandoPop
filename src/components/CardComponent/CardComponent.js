import React from 'react';
import './styles.css'
import TextComponent from "../TextComponent/TextComponent";
const CardComponent:React.FC<any> =  ({content, image}) => {
    return (
        <div className={'divBody'}>

            <div className={'divCard'}><img className={'img'} src={image} alt="blog"/><TextComponent input={content}></TextComponent></div>
        </div>

    )
}
export default CardComponent;