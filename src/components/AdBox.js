import React from "react";

export default function AdBox(){
    return(
    <div className="Box-class">
        <div className="cart">
            <div className="setInline">
                <img src={require("../images/SkillUpImage.png")}></img>
                <div className="text-align">
                <h3>
                    Java dla opornych
                </h3>
                <h6>
                    #Java #Beginner #IT
                </h6>
                </div>
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab libero, distinctio quisquam sint ea atque.
            </p>
            <h6>
                Dodano przez: huj
            </h6>
        </div>
    </div>
    )
}