import Card from './Card';
import React from "react";

const CardList = ({robots}) => {
    if (true) {
        throw new Error("Noooooo! Something went wrong!");
    }
    
    return (
    <div className="tc">
            {robots.map((user, i) => {
                return (
                    <Card 
                    key={i} 
                    id={robots[i].id} 
                    name={robots[i].name} 
                    email={robots[i].email} 
                    />
                );
            })}
        </div>
    );
};

export default CardList;