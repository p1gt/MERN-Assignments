import { useParams } from "react-router-dom";

const Variable = () => {
    const { variable, color, backgroundColor } = useParams();
    
    const style = {
        color: color,
        backgroundColor: backgroundColor,
    };
    
    return (
        <>
            <h1 style={style}>{
                isNaN(+variable)? `The word is: ${variable}.` : `The number is: ${variable}.`
            }</h1>
        </>
    );
};

export default Variable;
