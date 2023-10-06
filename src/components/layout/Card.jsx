import "./Card.css"
import React from "react";

export default(props) => {
    const cardStyle = {
        backgroundColor: props.backgroundColor || '#F00',
        borderColor: props.backgroundColor || '#F00'
    }
    return (
        <div className="Card" style={cardStyle}>
            <div className="Title">{props.title}</div>
            <div className="Content">{props.children}</div>
        </div>
    );
};