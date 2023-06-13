import React from "react"
import { FaUser } from 'react-icons/fa';


export default function Header(){
    return(
        <header>
            <div className="header">
              <a href="#">
                <img src={require("../images/image-removebg-preview.png")}>
                </img>
              </a>
              <nav className="navigation setCenter">
                <ul className="menu">
                  <li>Popularne</li>
                  <li>Biznes</li>
                  <li>Edukacja</li>
                </ul>
              </nav>
              <div className="setCenter addPadding">
                <a className="create-button" href="#">Stwórz nowy</a>
                  <div className="user-icon">
                    <FaUser />
                  </div>
              </div>
            </div>
        </header>
  );
}