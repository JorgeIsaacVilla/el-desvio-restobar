import React from "react";
import "./Menu.css";
import imagen1 from "./imgMenu3/img1.jpg";
import imagen2 from "./imgMenu3/img2.jpg";
import imagen3 from "./imgMenu3/img3.jpg";
import imagen4 from "./imgMenu3/img4.jpg";
import imagen5 from "./imgMenu3/img5.jpg";

function Menu3({sectionId}){
    const menuItem =[
    {pos:1,
    image:imagen1,
    food:"Sencilla",
    price:14000,
    ingredients:""},

    {pos:2,
    image:imagen2,
    food:"Gratinada",
    price:17000,
    ingredients:""},

    {pos:3,
    image:imagen3,
    food:"Ranchera",
    price:18000,
    ingredients:""},

    {pos:4,
    image:imagen4,
    food:"Suiza",
    price:20000,
    ingredients:""},

    {pos:5,
    image:imagen5,
    food:"Chori-buti",
    price:18000,
    ingredients:""},

    {pos:5,
    image:imagen5,
    food:"Carne-Pollo",
    price:23000,
    ingredients:""},

    {pos:6,
    image:imagen5,
    food:"Combinado",
    price:23000,
    ingredients:""},

    {pos:7,
    image:imagen5,
    food:"Pollo",
    price:22000,
    ingredients:""},

    {pos:8,
    image:imagen5,
    food:"Lomito",
    price:24000,
    ingredients:""},

    {pos:9,
    image:imagen5,
    food:"La bodegona",
    price:27000,
    ingredients:""},
    ]
    return(
        <>
            <h2 className="tittle-item" id={sectionId} >SALCHIPAPAS</h2>
            <ul>
                {menuItem.map((item)=>
                <li key= {item.pos} >
                    <div className="item-contend">
                        {/*<img src={item.image} />*/}
                        <div>
                            <h3 
                             className="tittle-food">
                                {item.food}</h3>
                                <p className="ingredients">
                                    {item.ingredients}
                                </p>
                        </div>
                    </div>
                    <p className="price"> <strong>${item.price}</strong> </p>
                </li>
                )}
            </ul>
        </>
    )
};
export { Menu3 };