import React from "react";
import "./Menu.css";
import imagen1 from "./imgMenu5/img1.jpg";
import imagen2 from "./imgMenu5/img2.jpg";
import imagen3 from "./imgMenu5/img3.jpg";
import imagen4 from "./imgMenu5/img4.jpg";
import imagen5 from "./imgMenu5/img5.jpg";

function Menu5({sectionId}){
    const menuItem =[
    {pos:1,
    image:imagen1,
    food:"Chori-Buti",
    price:17500,
    ingredients:""},

    {pos:2,
    image:imagen2,
    food:"Suizo",
    price:17000,
    ingredients:""},

    {pos:3,
    image:imagen3,
    food:"Ranchero",
    price:19000,
    ingredients:""},

    {pos:4,
    image:imagen4,
    food:"Combinado",
    price:21000,
    ingredients:""},

    {pos:5,
    image:imagen5,
    food:"Pollo",
    price:20000,
    ingredients:""},

    {pos:6,
    image:imagen5,
    food:"Carne-Pollo",
    price:21000,
    ingredients:""},

    {pos:7,
    image:imagen5,
    food:"Lomito",
    price:23000,
    ingredients:""},
    ]
    return(
        <>
            <h2 className="tittle-item" id={sectionId}>Desgranados</h2>
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
export { Menu5 };