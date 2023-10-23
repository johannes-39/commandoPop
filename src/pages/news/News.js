import './styles.css';
import React, {useState} from "react";
import GameComponent from "../../components/GameComponent/GameComponent";
import image1 from '../../images/logoteam.jpeg'
import ArtikelComponent from "../../components/ArtikelComponent/ArtikelComponent";
import image from '../../images/artikel-post.jpg'
import Checkout from "../../components/Checkout/Checkout";
import CardComponent from "../../components/CardComponent/CardComponent";
import image2 from "../../images/blog-post-3.jpeg";
import image3 from "../../images/gostenhof.jpg";
function News() {
    const [checkout, setCheckout] = useState(false);
    return (
        <div className={"divCompNews"}>
            {
                checkout === true ?
                    <Checkout setCheckout={setCheckout} checkout={checkout}></Checkout> : null }

            <div className={"divContent"}>
                <CardComponent setCheckout={setCheckout} checkout={checkout} content={"commando poppenreuth shirt"} content1={"20€"} image={image2}/>
            </div>
            <GameComponent team1logo={image3} team2logo={image1} team1score={"1"} team2score={"2"} info={"sonntag 15:00"}></GameComponent>

            <ArtikelComponent image={image} content={"Der SV Fürth-Poppenreuth gewann sein Heimspiel gegen die SG Puschendorf/Tuchenbach ungefährdet mit 4:1 und behauptete damit den dritten Tabellenplatz. Nach der frühen 2:0-Führung durch Philipp Müller und Dominik Döll verkürzte Paul Bernreuther zwar, doch erneut Döll und Stefano Deviggiano stellten in der zweiten Halbzeit den Endstand her. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}></ArtikelComponent>
        </div>





    );
}

export default News;