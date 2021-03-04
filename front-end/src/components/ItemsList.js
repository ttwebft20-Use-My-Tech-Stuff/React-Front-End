import React from 'react';
import { connect } from 'react-redux';
import ItemCard from './ItemCard';
import { fetchItems } from '../redux/itemsActions';

function ItemsList({ items }) {
    return (
        <div className="cardrow">
            {items.map((item) => {
                return <ItemCard key={item.item_name} item={item} />;
            })}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        items: state.items.items,
        isLoading: state.isLoading.isLoading
    }
}

export default connect(mapStateToProps, { fetchItems })(ItemsList);
