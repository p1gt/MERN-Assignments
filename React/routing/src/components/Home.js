import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <h1>Home</h1>
            <Link to={"/about"}>about</Link> | <Link to={"/survey"}>survey</Link>
        </>
    );
};

export default Home;
