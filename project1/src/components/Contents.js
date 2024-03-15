import React from 'react';

import Itemlist from './itemlist';

const Content = ({ items, handleCheck, handleliRemove }) => {
    return (
        <>
            {items.length > 0 ? (
                 
                 <Itemlist  
                 items={items}
                handleCheck={handleCheck}
                handleliRemove={handleliRemove}/>
            ) : (
                <h2 className="lettask">Task not available</h2>
            )}
        </>
    );
};

export default Content;
