import products from "../other/products";
import IconSwitch from "./IconSwitch";
import CardsView from "./CardsView";
import ListView from "./ListView";
import React, { useState } from "react";

const Store = () => {
    const [icon, setIcon] = useState("view_list");

    const onSwitch = () => {
        setIcon(prevIcon => prevIcon === "view_list" ? "view_module" : "view_list");
    };

    return (
        <div className="app-products">
            <IconSwitch icon={icon} onSwitch={onSwitch} />
            {icon === "view_list" ? (
                <CardsView cards={products} />
            ) : (
                <ListView items={products} />
            )}
        </div>
    );
}

export default Store;