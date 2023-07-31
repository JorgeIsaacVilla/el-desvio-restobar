import React from "react";
import "./Menu.css";
import imagen1 from "./imgMenu1/img1.jpg";
import imagen2 from "./imgMenu1/img2.jpg";
import imagen3 from "./imgMenu1/img3.jpg";
import imagen4 from "./imgMenu1/img4.jpg";
import imagen5 from "./imgMenu1/img5.jpg";

function Menu1({sectionId}) {

    const menuItem =[
        {pos:1,
        image: imagen1,
        food:"Sencillo",
        price:7000,
        ingredients:""},

        {pos:2,
        image:imagen2,
        food:"Gemelo",
        price:9000,
        ingredients:""},

        {pos:3,
        image:imagen3,
        food:"Mexicano",
        price:11000,
        ingredients:""},

        {pos:4,
        image:imagen4,
        food:"Medio Suizo",
        price:12000,
        ingredients:""},

        {pos:5,
        image:imagen5,
        food:"Chori-Buti",
        price:13000,
        ingredients:""},

        {pos:6,
        image:imagen5,
        food:"Ranchero",
        price:13000,
        ingredients:""},

        {pos:7,
        image:imagen5,
        food:"Suizo",
        price:16000,
        ingredients:""},

        {pos:8,
        image:imagen5,
        food:"Italiano Hawaiano",
        price:17000,
        ingredients:""},

        {pos:9,
        image:imagen5,
        food:"Ítalo Suizo",
        price:18000,
        ingredients:""},

    ];

    return(
     <div >
        <h2 className="tittle-item" id={sectionId}>PERROS CALIENTES</h2>
        <ul>
            {menuItem.map((item)=>
                <li key={item.pos}>
                    <div className="item-contend">
                        {/*<img src = {item.image} />*/}
                        <div>
                            <h3 className="tittle-food"> {item.food} </h3>
                            <p className="ingredients"> {item.ingredients} </p>
                        </div>
                    </div>
                    <p className="price"> <strong>${item.price}</strong> </p>
                </li>
            )}
        </ul>
     </div>   
    )
}
export { Menu1 };