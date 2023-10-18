import React from 'react';
import './styles.css'
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import Dropdown from "../Dropdown/Dropdown";
const TextComponent:React.FC<any> =  ({myclick, content1, input}) => {
    console.log(myclick);
    return (
        <div>
            {
                myclick === false ? <p  className={'p'}>{input}</p>: <div><p  className={'p2'}>{content1}<div className={'line'}></div>
                <div className={"purchase"}>
                    <Dropdown></Dropdown>
                    <div className={'line1'}></div>
                    <ButtonComponent></ButtonComponent>


                </div>
                </p></div>}
        </div>
    )
}
export default TextComponent;