import React from 'react';

const All = (props) => {

    let food = props.match.params.food;

    let foodId = props.match.params.foodId;

    let optionalId = foodId ? "Id : " + foodId : "";

    return (
        <div>
            <h1>All avaliable foods</h1>
            <h2>Food: {food}</h2>
            <h3>{optionalId}</h3>
        </div>
    )
}

export default All;