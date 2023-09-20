import React, {useState} from 'react';
import './styles.css'
import TextComponent from "../TextComponent/TextComponent";
import image from '../../images/blog-post-1.jpg'
import ButtonComponent from "../ButtonComponent/ButtonComponent";
const CardComponent:React.FC<any> =  ({content}) => {
    const [ open, setOpen ] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    }
    return (
        <div className={'divBody'}>

            <div className={'divCard'}><img className={'img'} src={image} alt="blog"/><TextComponent input={content}></TextComponent><button onClick={handleClick}>test</button></div>
        </div>

    )
}
export default CardComponent;