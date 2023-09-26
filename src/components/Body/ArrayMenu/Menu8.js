import React from "react";
import "./Menu.css";
/*import imagen1 from "./imgMenu8/img1.jpg";
import imagen2 from "./imgMenu8/img2.jpg";
import imagen3 from "./imgMenu8/img3.jpg";
import imagen4 from "./imgMenu8/img4.jpg";
import imagen8 from "./imgMenu8/img5.jpg";*/

function Menu8({sectionId}){
    const menuItem =[
    {pos:1,
    image:"imagen1",
    food:"Costillas BBQ",
    price:25000,
    ingredients:""},

    {pos:2,
    image:"imagen2",
    food:"Chuleta De Cerdo",
    price:22000,
    ingredients:""},

    {pos:3,
    image:"imagen3",
    food:"Parrillada Mixta",
    price:27000,
    ingredients:""},

    {pos:4,
    image:"imagen4",
    food:"Lomo De Cerdo",
    price:23000,
    ingredients:""},

    {pos:5,
    image:"imagen5",
    food:"Pechuga Asada",
    price:23000,
    ingredients:""},

    {pos:6,
    image:"imagen6",
    food:"Lomo De Res Asado Al Carbón",
    price:28000,
    ingredients:""},
    ]
    return(
        <>
            <h2 className="tittle-item" id={sectionId}>ASADOS</h2>
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
export { Menu8 };