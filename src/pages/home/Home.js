import '../../App.css';
import CardComponent from "../../components/CardComponent/CardComponent";
import image2 from '../../images/blog-post-3.jpeg'
import image3 from '../../images/blog-post-4.jpeg'
import image4 from '../../images/blog-post-5.jpeg'
import React, {useState} from "react";
import Checkout from "../../components/Checkout/Checkout";

function App() {
    const [checkout, setCheckout] = useState(false);
    return (
        <div>
            {
                checkout === true ?
                    <Checkout setCheckout={setCheckout} checkout={checkout}></Checkout> : null }

            <div className={"divContent"}>
                <CardComponent setCheckout={setCheckout} checkout={checkout} content={"commando poppenreuth shirt"} content1={"20€"} image={image2}/>
                <CardComponent setCheckout={setCheckout} checkout={checkout} content={"commando poppenreuth shirt"} content1={"15€"} image={image3}/>
                <CardComponent setCheckout={setCheckout} checkout={checkout} content={"commando poppenreuth schal"} content1={"10€"} image={image4}/>
            </div>
        </div>





    );
}

export default App;