import { useParams } from "react-router-dom";

const Location = () => {
    const { city } = useParams();
    
    return (
        <>
            <h2>{city}</h2>
            <p>You have reached the {city} page.</p>
        </>
    );
};

export default Location;
