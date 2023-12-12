import React from "react";
import "./Menu.css";
/*import imagen1 from "./imgMenu9/img1.jpg";
import imagen2 from "./imgMenu9/img2.jpg";
import imagen3 from "./imgMenu9/img3.jpg";
import imagen4 from "./imgMenu9/img4.jpg";
import imagen5 from "./imgMenu9/img5.jpg";*/

function Menu9({sectionId, onProductClick}){

    const handleItemclick = (item) => {
        onProductClick(item);
    }

    const menuItem =[
            
            {pos:1,
            image: "imagen1",
            food:'Salvajada Bodegona #1',
            price:'50000',
            ingredients:'Bollo | Papas a la Francesa | Lomo de Res | Pechuga de Pollo | Butifarra | Chorizo | Lechuga | Papa Chongo | Queso Costeño | Gratinado con Queso Mozzarella | Maíz | Costillas BBQ (Sugerido para Máx. 3 Personas) '},
            
            {pos:2,
            image: "imagen2",
            food:'Salvajada Bodegona #2',
            price:'70000',
            ingredients:'Bollo | Papas a la Francesa | Lomo de Res | Pechuga de Pollo | Butifarra | Chorizo | Lechuga | Papa Chongo | Queso Costeño | Gratinado con Queso Mozzarella | Maíz | Costillas BBQ (Sugerido para Máx. 5 Personas) '},
            
            {pos:3,
            image: "imagen3",
            food:'Alitas BBQ',
            price:'25000',
            ingredients:'Papas a la Francesa | Ensalada | 10 Unidades de Alitas | Salsa de la Casa | Bastones de Apio – Zanahoria. '},

            {pos:4,
            image: "imagen4",
            food:'Nuggets De Pollo',
            price:'15000',
            ingredients:'150 gr De Papas a la Francesa + Bebida + Postre del día.'},
    
    ]
    
    return(
        <>
            <h2 className="tittle-item" id={sectionId}>DE LA CASA</h2>
            <ul>
                {menuItem.map((item)=>
                <li key= {item.pos} onClick={() => handleItemclick(item)}>
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
export { Menu9 };