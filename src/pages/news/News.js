import './styles.css';
import React from "react";
import GameComponent from "../../components/GameComponent/GameComponent";
import image1 from '../../images/logoteam.jpeg'
import ArtikelComponent from "../../components/ArtikelComponent/ArtikelComponent";
import image from '../../images/blog-post-1.jpg'
function News() {
    return (
        <div className={"divCompNews"}>
            <GameComponent team1logo={image1} team2logo={image1} team1score={"1"} team2score={"2"} info={"sonntag 15:00"}></GameComponent>
            <ArtikelComponent image={image} content={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}></ArtikelComponent>
        </div>





    );
}

export default News;