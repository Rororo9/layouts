import React from "react";

const IconSwitch = ({ onSwitch, icon }) => {
    return (
        <div className="icon">
            <div
                onClick={(e) => onSwitch(e.target.innerText)}
                className="material-icons"
            >
                {icon}
            </div>
        </div>
    );
}

export default IconSwitch;