import React from 'react';
import ItemCard from './ItemCard';

function ItemsList(props) {
    return (
        <div className="cardrow">
            {props.items.map((item) => {
                return <ItemCard key={item.id} item={item} />;
            })}
        </div>
    );
}

export default ItemsList;
