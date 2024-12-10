import React from "react";
import "../../styles/components/destination/destination.css";
import DestinationCard from '../destinationcard/DestinationCard';

export default function DestinationSection() {
    const destinations_data = [
        { id: 1, title: "Santorini Beach", url: "https://img.freepik.com/free-photo/stony-beach-landscape_23-2151716245.jpg?t=st=1727292255~exp=1727295855~hmac=588e7090f93792851be99cb4b4518fcd26b82028e7b977f13ed9cb63d2ccf4db&w=1060", description: "Beautiful sandy beach with clear waters." },
        { id: 2, title: "Mountain Sunset", url: "https://img.freepik.com/premium-photo/sunset-with-mountain-background_1120735-4430.jpg?w=360", description: "Serene sunset view over mountains." },
        { id: 3, title: "Rocky Shore", url: "https://img.freepik.com/free-photo/stony-beach-landscape_23-2151716272.jpg?t=st=1727512681~exp=1727516281~hmac=43a3d08143e4a0aa4228eee15d50c437dbd5c05b195b5e738939ea7fa7f7e932&w=1060", description: "Rocky landscape by the sea." },
        { id: 4, title: "Coastline View", url: "https://img.freepik.com/free-photo/beautiful-coastline-landscape_23-2151716320.jpg?t=st=1727512713~exp=1727516313~hmac=165699628acbdaf9ddb51891d2695a72afbe2762247be9e0c956c1bee58622c4&w=360", description: "A beautiful view of the coastline." },
        { id: 5, title: "Beach Sunset", url: "https://img.freepik.com/free-photo/stony-beach-landscape_23-2151716245.jpg?t=st=1727292255~exp=1727295855~hmac=588e7090f93792851be99cb4b4518fcd26b82028e7b977f13ed9cb63d2ccf4db&w=1060", description: "Golden sunset by the beach." },
        { id: 6, title: "Island Paradise", url: "https://img.freepik.com/premium-photo/sunset-with-mountain-background_1120735-4430.jpg?w=360", description: "Tropical island with sandy beaches." },
    ];

    return (
        <div className="destinationSection">
            <h3>The Destination</h3>
            <div className="destinationCard_container">
                {destinations_data.map((item, index) => (
                    <DestinationCard key={index} title={item.title} url={item.url} description={item.description} />
                ))}
            </div>
        </div>
    );
}



