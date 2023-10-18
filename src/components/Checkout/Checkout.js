import React from 'react';
import './styles.css';
const Checkout:React.FC<any> =  ({setCheckout, checkout}) => {
    const handleOnClick = () => {
        setCheckout(!checkout);
    }

    return (
        <dialog open className={"dialog"}>
            <button className={'button12'} onClick={handleOnClick}>close</button>
            <div className={"dialogContent"}>
            <input className={'input'} placeholder={"name"}/>
                <input className={'input'} placeholder={"vorname"}/>
                <input className={'input'} placeholder={"ort"}/>
                <input className={'input'} placeholder={"plz"}/>
                <input className={'input'} placeholder={"straße & hausnummer"}/>

                <button className={'buttonBestellen'} onClick={handleOnClick}>Kostenpflichtig bestellen</button>

        </div>

        </dialog>
    )
}
export default Checkout;