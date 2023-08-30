import React from "react";
function ListOfFruits() {
    const fruits = [{ id: 1, name: "Apples" }, { id: 2, name: "Bananas" }, { id: 3, name: "Oranges" }, { id: 4, name: "Papaya" }]

    return (
        <div>
            <h2>List of Fruits</h2>
            <ul>
                {
                    fruits.map((temp) => <li key={temp.id}>{temp.name}</li>)
                }
            </ul>

        </div>
    )
}

export default ListOfFruits;