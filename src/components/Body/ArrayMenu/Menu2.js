import React from "react";
import "./Menu.css";
import imagen1 from "./imgMenu2/img1.jpg";
import imagen2 from "./imgMenu2/img2.jpg";
import imagen3 from "./imgMenu2/img3.jpg";
import imagen4 from "./imgMenu2/img4.jpg";
import imagen5 from "./imgMenu2/img5.jpg";

function Menu2({sectionId}){
    const menuItem =[
    {pos:1,
    image:imagen1,
    food:"Sencillo",
    price:12000,
    ingredients:""},

    {pos:2,
    image:imagen2,
    food:"Gratinada",
    price:15000,
    ingredients:""},

    {pos:3,
    image:imagen3,
    food:"Hawaiana",
    price:15000,
    ingredients:""},

    {pos:4,
    image:imagen4,
    food:"Ranchero",
    price:17000,
    ingredients:""},

    {pos:5,
    image:imagen5,
    food:"Suiza",
    price:19000,
    ingredients:""},

    {pos:6,
    image:imagen5,
    food:"Pollo",
    price:20000,
    ingredients:""},

    {pos:7,
    image:imagen5,
    food:"Carne-Pollo (Mixta)",
    price:22000,
    ingredients:""},

    {pos:8,
    image:imagen5,
    food:"Lomito",
    price:33000,
    ingredients:""},

    {pos:9,
    image:imagen5,
    food:"Combinado",
    price:22000,
    ingredients:""},
    ]
    
    return(
        <>
            <h2 className="tittle-item" id={sectionId}>MAZORCAS</h2>
            <ul>
                {menuItem.map((item)=>
                <li key= {item.pos} >
                    <div className="item-contend">
                       {/* <img src={item.image} />*/}
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
export { Menu2 };