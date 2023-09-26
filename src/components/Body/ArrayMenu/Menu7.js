import React from "react";
import "./Menu.css";
/*import imagen1 from "./imgMenu7/img1.jpg";
import imagen2 from "./imgMenu7/img2.jpg";
import imagen3 from "./imgMenu7/img3.jpg";
import imagen4 from "./imgMenu7/img4.jpg";
import imagen7 from "./imgMenu7/img5.jpg";*/

function Menu7({sectionId}){
    const menuItem =[
    {pos:1,
    image:"imagen1",
    food:"Combinado",
    price:27000,
    ingredients:""},

    {pos:2,
    image:"imagen2",
    food:"Pollo",
    price:25000,
    ingredients:""},

    {pos:3,
    image:"imagen3",
    food:"Carne - Pollo",
    price:26000,
    ingredients:""},

    {pos:4,
    image:"imagen4",
    food:"Lomito",
    price:27000,
    ingredients:""},

    {pos:5,
    image:"imagen5",
    food:"Chori - Buti",
    price:23000,
    ingredients:""},
    ]
    return(
        <>
            <h2 className="tittle-item" id={sectionId}>PATACONAZO</h2>
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
export { Menu7 };