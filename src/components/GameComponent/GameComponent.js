import React from 'react';
import './styles.css';
const GameComponent:React.FC<any> =  ({team1logo, team2logo, team1score, team2score, info}) => {

    return (
        <div className={"box1"}>
            <div className={"box2"}>
                <div className={"box"}><img className={"img1"} src={team1logo} alt={"logo"}/>
                    <div className={"vs"}>:</div>
                    <img className={"img2"} src={team2logo} alt={"logo2"}/></div>

                <div className={"devider"}></div>
                <p className={"pGame"}>{info}</p>
            </div>
        </div>)
}
export default GameComponent;