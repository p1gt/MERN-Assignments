const Groceries = () => {
    const groceryList = ["pearl onions", "thyme", "cremini mushrooms", "butter"];
    
    return (
        <ul>
            { groceryList.map((item, index) => <li key={index}>{item}</li>) }
        </ul>
    );
};

export default Groceries;
