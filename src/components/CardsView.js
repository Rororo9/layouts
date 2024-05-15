import React from "react";

const CardsView = ({ cards }) => {
    return (
        <ul className="cardsView">
            {cards?.map((elem, idx) => (
                <li className="shopCard" key={idx}>
                    <img src={elem.img} alt="shopCard" />
                    <div className="name-card">{elem.name}</div>
                    <div className="color-card">{elem.color}</div>
                    <div className="price-btn-card">
                        <div className="price-card">${elem.price}</div>
                        <div className="add-btn-card">add to cart</div>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default CardsView;