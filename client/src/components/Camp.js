import React from 'react';


export default function Camp({camps}) {

    


    return (
        <div>
            { camps.map((camp) => (
                <div>
                    <h1>{camp.title}</h1>
                    <p>Date: {camp.date}</p>
                    <p>Location: {camp.location}</p>
                    <p>Price: {camp.price}</p>
                </div>
            ))}
        </div>
    )
}