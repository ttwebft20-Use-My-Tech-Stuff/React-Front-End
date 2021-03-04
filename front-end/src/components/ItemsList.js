import React from 'react'
import ItemCard from './ItemCard'

function ItemsList({ items }) {
    return (
        <div className="itemscard">
            {
                items.map(item => {
                    return <ItemCard key={item.item_name} item={item} />
                })
            }
        </div>
    )
}

export default ItemsList
