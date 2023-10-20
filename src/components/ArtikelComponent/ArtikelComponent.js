import React from 'react';
import './styles.css';
const ArtikelComponent:React.FC<any> =  ({image, content}) => {

    return (
        <div className={"artikelbox"}>
            <div className={"artikelContainer"}>
                <img className={"image1"} src={image} alt={"bild"}/>


            </div>
            <div className={"content"}><p className={"text"}>{content}</p></div>

        </div>)
}
export default ArtikelComponent;