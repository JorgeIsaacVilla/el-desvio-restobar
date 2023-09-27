import React from "react";
import "./Menu.css";
/*import imagen1 from "./imgMenu6/img1.jpg";
import imagen2 from "./imgMenu6/img2.jpg";
import imagen3 from "./imgMenu6/img3.jpg";
import imagen4 from "./imgMenu6/img4.jpg";*/

function Menu6({sectionId}){
    const menuItem =[

        {pos:1,
        image: "imagen1",
        food:'Clásica de la casa',
        price:'17000',
        ingredients:'Pan Brioche | Carne (Previamente Asado al Carbón) | Queso Mozzarella | Tomate | Cebolla | Tártara de la Casa. '},
        
        {pos:2,
        image: "imagen2",
        food:'Clásica de pollo',
        price:'18000',
        ingredients:'Pan Brioche | Pollo (Previamente Asado al Carbón) | Queso Mozzarella | Tomate | Cebolla | Tártara de la Casa. '},
        
        {pos:3,
        image: "imagen3",
        food:'doble carne',
        price:'22000',
        ingredients:'Pan Brioche | Doble Carne (Previamente Asado al Carbón) | Queso Mozzarella | Tomate | Cebolla | Tártara de la Casa. '},
        
        {pos:4,
        image: "imagen4",
        food:'Hamburguesa artesanal',
        price:'17000',
        ingredients:'Pan Brioche | Carne (Previamente Asado al Carbón) | Queso Mozzarella | Tomate | Cebolla Caramelizada | Salsa Tenesis. '},
        
        {pos:5,
        image: "imagen5",
        food:'Hamburguesa artesanal de pollo',
        price:'17000',
        ingredients:'Pan Brioche | Pollo (Previamente Asado al Carbón) | Queso Mozzarella | Tomate | Cebolla | Salsa Tenesis.'},

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
                                {item.food.toUpperCase()}</h3>
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