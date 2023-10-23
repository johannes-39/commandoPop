import React, {useState} from 'react';
import './styles.css';
const ArtikelComponent:React.FC<any> =  ({image, content}) => {

    const [ text, setText ] = useState(false);

    const handleOnClick = () => {
        setText(!text);
    }


    return (
        <div className={"artikelbox"}>
            <div className={"artikelContainer"}>
                <img className={"image1"} src={image} alt={"bild"}/>


            </div>

            {
                text === true ? <div className={"contentBlock"}>
                <div className={"headerBlock2"}>
                    <p className={"text"}>Poppenreuth siegreich</p>
                    <button onClick={handleOnClick} className={"pfeilbox"}>{"<"}</button>
                </div>
                    <div className={"contentBlock2"}><div>{content}</div></div>

                </div> :
                    <div className={"headerBlock"}>
                        <p className={"text"}>Poppenreuth siegreich</p>
                        <button onClick={handleOnClick} className={"pfeilbox"}>{"<"}</button>
                    </div>
            }

        </div>)
}
export default ArtikelComponent;