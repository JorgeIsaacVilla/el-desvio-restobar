import React, { useState } from "react";
import "./Menu.css";
import instagram from "./imgMenu/icoInstagram.svg";
import faceboock from "./imgMenu/icoFacebook.svg";
import twitter from "./imgMenu/icoTwitter.svg";
import tiktok from "./imgMenu/icoTiktok.svg";
import domicilio from "./imgMenu/icoDomicilio.svg";

function Menu() {

    const [menuVisible, setMenuVisible] = useState(true);
    const toggleMenu = () =>{
        setMenuVisible(!menuVisible);
    };
    
    const redesItem=[
        {redSocial:"instagram",
         imageRedSocial:instagram,
         userRedSocial:"eldesviorestobar",
         linkRedSocial:"https://instagram.com/eldesviorestobar59?igshid=NGVhN2U2NjQ0Yg=="},

        /*{redSocial:"faceboock",
         imageRedSocial:faceboock,
         userRedSocial:"El Desvío Restobar  ",
         linkRedSocial:"https://www.facebook.com/profile.php?id=100092939194114"},

         {redSocial:"twitter",
         imageRedSocial:twitter,
         userRedSocial:"Plate_fork",
         linkRedSocial:"https://jorgeisaacvilla.github.io/my_portafolio/"},

         {redSocial:"tiktok",
         imageRedSocial:tiktok,
         userRedSocial:"@Platefork",
         linkRedSocial:"https://jorgeisaacvilla.github.io/my_portafolio/"},*/
    ];

    return(
        <>
        {menuVisible && (
            <div className="component-menu">

                <div>
                    <div className="component-header-menu">
                        <div className="logo-restaurante"></div>
                        <div className="menu-closed" onClick={toggleMenu}></div>
                    </div>
                    <h2 className="tittle-redes-social">Síguenos</h2>
                    <ul>
                        {redesItem.map((redes)=>
                        <div className="item-redes" key={redes.redSocial}>
                            <a href={redes.linkRedSocial} >
                                <img src={redes.imageRedSocial} />
                                <p> {redes.userRedSocial} </p>
                            </a>
                        </div>
                        )}
                    </ul>
                    <div className="line"></div>
                    <div className="domicilio">
                        <div className="image-domicilio">
                            <img src={domicilio} />
                        </div>
                        <div>
                            <h2 className="h2-image-domicilio">¡Envío a domicilio!</h2>
                            <p className="p-image-domicilio">Servicio a domicilios 3023844831.</p>
                        </div>
                    </div>
                </div>

                <div className="footer-component-menu">
                    <div className="line" style={{marginBottom:"16px"}}></div>
                    <a href="https://jorgeisaac.vercel.app/" >Realizado por Jorge Isaac Villa López | Portfolio.com</a>         
                </div>

            </div>
        )}
        </>
    );
    
}
export { Menu };