import React from 'react';
import './styles.css'
import ButtonComponent from "../ButtonComponent/ButtonComponent";
const TextComponent:React.FC<any> =  ({myclick, content1, input}) => {
    console.log(myclick);
    return (
        <div>
            {
                myclick === false ? <p  className={'p'}>{input}</p>: <div><p  className={'p1'}>{input}<div className={'line'}></div>
                <div className={"purchase"}>
                    <p  className={'p2'}>{content1}</p>
                    <ButtonComponent></ButtonComponent>


                </div>
                </p></div>}
        </div>
    )
}
export default TextComponent;