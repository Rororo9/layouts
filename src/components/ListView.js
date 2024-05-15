import React from "react";

const ListView = ({ item }) => {
    return (
        <ul className="listView">
            {item?.map((el, idx) => (
                <li className="shop-item" key={idx}>
                    <img src={el.img} alt="shop-item" />
                    <div className="name-view">{el.name}</div>
                    <div className="color-view">{el.color}</div>
                    <div className="price-view">${el.price}</div>
                    <div className="add-btn-view">Add to cart</div>
                </li>
            ))}
        </ul>
    );
}

export default ListView;