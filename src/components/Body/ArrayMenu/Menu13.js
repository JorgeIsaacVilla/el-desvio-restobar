import React from "react";
import "./Menu.css";
/*import imagen1 from "./imgMenu13/img1.jpg";
import imagen2 from "./imgMenu13/img2.jpg";
import imagen3 from "./imgMenu13/img3.jpg";
import imagen4 from "./imgMenu13/img4.jpg";*/

function Menu13({sectionId}){
    const menuItem =[
    {pos:1,
    image:"imagen1",
    food:"Empanadas de Carne, Salsa y Pico de Gallo X 6 Und",
    price:8000,
    ingredients:""},

    {pos:2,
    image:"imagen2",
    food:"Deditos de Queso y Salsa",
    price:8000,
    ingredients:""},

    {pos:3,
    image:"imagen3",
    food:"Yuquita Frita con Suero",
    price:8000,
    ingredients:""},

    {pos:4,
    image:"imagen4",
    food:"Canastitas de Plátano Verde. Pídelo con Suero, Queso y Pico de Gallo X 4 Und",
    price:8000,
    ingredients:""},
    ]
    return(
        <>
            <h2 className="tittle-item" id={sectionId}>ENTRADAS</h2>
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
export { Menu13 };