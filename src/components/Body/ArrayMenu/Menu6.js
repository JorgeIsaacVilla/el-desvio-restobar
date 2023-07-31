import React from "react";
import "./Menu.css";
import imagen1 from "./imgMenu5/img1.jpg";
import imagen2 from "./imgMenu5/img2.jpg";
import imagen3 from "./imgMenu5/img3.jpg";
import imagen4 from "./imgMenu5/img4.jpg";

function Menu6({sectionId}){
    const menuItem =[
    {pos:1,
    image:imagen1,
    food:"Pollo",
    price:17000,
    ingredients:""},

    {pos:2,
    image:imagen2,
    food:"Carne",
    price:17000,
    ingredients:""},

    {pos:3,
    image:imagen3,
    food:"Doble Carne",
    price:22000,
    ingredients:""},

    {pos:4,
    image:imagen4,
    food:"Doluxe Carne",
    price:24000,
    ingredients:""},

    ]
    return(
        <>
            <h2 className="tittle-item" id={sectionId}>HAMBURGUESAS</h2>
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
export { Menu6 };