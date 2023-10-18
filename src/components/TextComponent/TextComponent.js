import React from 'react';
import './styles.css'
import ButtonComponent from "../ButtonComponent/ButtonComponent";
const TextComponent:React.FC<any> =  ({myclick, input}) => {
    console.log(myclick);
    return (
        <div>
            {
                myclick === false ? <p  className={'p'}>{input}</p>: <div><p  className={'p1'}>{input}<div className={'line'}></div>
                <div className={"purchase"}>
                    <p  className={'p2'}>{"commando poppenreuth shirt"}</p>
                    <ButtonComponent></ButtonComponent>


                </div>
                </p></div>}
        </div>
    )
}
export default TextComponent;