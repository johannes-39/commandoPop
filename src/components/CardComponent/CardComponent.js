import React, {useState} from 'react';
import './styles.css'
import TextComponent from "../TextComponent/TextComponent";
const CardComponent:React.FC<any> =  ({setCheckout, checkout, content, content1, image}) => {
    const [test, setTest] = useState(false);
    const handleOnClick = () => {
        setTest(!test);
    }
    return (
        <div className={'divBody'}>
            {
                test === true ? <div className={'divCard'}><img onClick={handleOnClick} className={'img'} src={image} alt="blog"/><TextComponent setCheckout={setCheckout} checkout={checkout} myclick={test} content1={content1} input={"BESTELLEN"}></TextComponent></div> :
                    <div  className={'divCard'}><img onClick={handleOnClick} className={'img'} src={image} alt="blog"/><TextComponent setCheckout={setCheckout} checkout={checkout} myclick={test} input={content}></TextComponent></div>
            }
        </div>

    )
}
export default CardComponent;