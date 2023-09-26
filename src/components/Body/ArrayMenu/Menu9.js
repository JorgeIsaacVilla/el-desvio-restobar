import React from "react";
import "./Menu.css";
/*import imagen1 from "./imgMenu9/img1.jpg";
import imagen2 from "./imgMenu9/img2.jpg";
import imagen3 from "./imgMenu9/img3.jpg";
import imagen4 from "./imgMenu9/img4.jpg";
import imagen5 from "./imgMenu9/img5.jpg";*/

function Menu9({sectionId}){
    const menuItem =[
    {pos:1,
    image:"imagen1",
    food:"Salvajada Bodegona #1",
    price:50000,
    ingredients:""},

    {pos:2,
    image:"imagen2",
    food:"Salvajada Bodegona #2",
    price:70000,
    ingredients:""},

    {pos:3,
    image:"imagen3",
    food:"Alitas BBQ",
    price:"",
    ingredients:""},

    {pos:4,
    image:"imagen4",
    food:"Hamburguesa London",
    price:"",
    ingredients:""},
    ]
    return(
        <>
            <h2 className="tittle-item" id={sectionId}>DE LA CASA</h2>
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
export { Menu9 };