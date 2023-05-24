import React from "react";
import ItemList from "./ItemList";

const Content = ({ items, handleCheck, handleDelete }) => {
    return (
        <main>
            {items.length ? (
                <ItemList
                    items={items}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
            ) : (
                <p style={{ marginTop: "2rem" }}> &#129335; Your list is empty &#129335; </p>
            )}
        </main>
    );
};

export default Content;
