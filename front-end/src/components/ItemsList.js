import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ItemCard from './ItemCard';
import { fetchItems } from '../redux/itemsActions';

function ItemsList({ items }) {
    // const { items } = props;

    // useEffect(() => {
    //     fetchItems();
    //     console.log(items);
    // }, [])

    // if (isLoading) {
    //     return <h1>Loading...</h1>;
    // }


    return (
        <div className="cardrow">
            {items.map((item) => {
                return <ItemCard key={item.item_name} item={item} />;
            })}
        </div>
    );
}

// const mapStateToProps = (state) => {
//     return {
//         items: state.items,
//         isLoading: state.isLoading
//     }
// }

export default connect(null, { fetchItems })(ItemsList);
