import React from "react";
import "./Menu.css";
import imagen1 from "./imgMenu4/img1.jpg";
import imagen2 from "./imgMenu4/img2.jpg";
import imagen3 from "./imgMenu4/img3.jpg";
import imagen4 from "./imgMenu4/img4.jpg";
import imagen5 from "./imgMenu4/img5.jpg";

function Menu4({sectionId}){
    const menuItem =[
    {pos:1,
    image:imagen1,
    food:"Sencillo",
    price:13000,
    ingredients:""},

    {pos:2,
    image:imagen2,
    food:"Chori - Buti",
    price:17500,
    ingredients:""},

    {pos:3,
    image:imagen3,
    food:"Gemelo",
    price:17000,
    ingredients:""},

    {pos:4,
    image:imagen4,
    food:"Ranchero",
    price:19000,
    ingredients:""},

    {pos:5,
    image:imagen5,
    food:"Suizo",
    price:20000,
    ingredients:""},

    {pos:6,
    image:imagen5,
    food:"Ítalo Hawaiano",
    price:22000,
    ingredients:""},

    {pos:7,
    image:imagen5,
    food:"Lomito",
    price:24000,
    ingredients:""},

    {pos:8,
    image:imagen5,
    food:"Pollo",
    price:21000,
    ingredients:""},

    {pos:9,
    image:imagen5,
    food:"Carne - Pollo",
    price:23000,
    ingredients:""},

    {pos:10,
    image:imagen5,
    food:"Combinado",
    price:22000,
    ingredients:""},

    {pos:11,
    image:imagen5,
    food:"Jamón Gratinado",
    price:19000,
    ingredients:""},

    {pos:12,
    image:imagen5,
    food:"Escoces",
    price:27000,
    ingredients:""},

    {pos:13,
    image:imagen5,
    food:"Ítalo Suizo",
    price:23000,
    ingredients:""},
    ]
    return(
        <>
            <h2 className="tittle-item" id={sectionId}>PERROS SALVAJES</h2>
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
export { Menu4 };