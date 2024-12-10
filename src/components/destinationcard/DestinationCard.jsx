import React from "react";

export default function DestinationCard({ title, url, description }) {
    return (
        <div className="destinationCard">
            <div className="destinationCard_image">
                <img src={url} alt="" />
            </div>
            <h5>{title}</h5>
            <p>{description}</p> {/* Display the description */}
        </div>
    );
}







