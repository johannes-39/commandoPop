import React from 'react';
import './styles.css';
const ButtonComponent:React.FC<any> =  ({setCheckout, checkout}) => {
    const handleOnClick = () => {
        setCheckout(!checkout);
    }
    return (
        <button onClick={handleOnClick} className={'button'}>kaufen</button>
    )
}
export default ButtonComponent;