import React, {useState} from 'react';
import './styles.css'
import TextComponent from "../TextComponent/TextComponent";
const CardComponent:React.FC<any> =  ({content, content1, image}) => {
    const [test, setTest] = useState(false);
    const handleOnClick = () => {
        setTest(!test);
    }
    return (
        <div onClick={handleOnClick} className={'divBody'}>
            {
                test === true ? <div className={'divCard'}><img className={'img'} src={image} alt="blog"/><TextComponent myclick={test} content1={content1} input={"BESTELLEN"}></TextComponent></div> :
                    <div className={'divCard'}><img className={'img'} src={image} alt="blog"/><TextComponent myclick={test} input={content}></TextComponent></div>
            }
        </div>

    )
}
export default CardComponent;