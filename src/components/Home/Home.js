import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Accordion, Card, Button } from "react-bootstrap";
import "./Home.css";

const Publications = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((json) => setUsers(json));
    }, []);

    return (
        <div className="App">
            <Accordion>
                {users.map((user) => (
                    <Card key={user.id}>
                        <Accordion.Toggle as={Card.Header} eventKey={user.id.toString()}>
                            {user.name}
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey={user.id.toString()}>
                            <Card.Body>
                                <p>Email: {user.email}</p>
                                <p>Website: {user.website}</p>
                                <Button variant="primary">Update</Button>{" "}
                                <Button variant="danger">Delete</Button>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                ))}
            </Accordion>
        </div>
    );
};

function Home({ isAuth }) {
    console.log(isAuth);
    return isAuth ? (
        <div className="home-container">
            <h1>
                <i className="fas fa-home"></i>Home
            </h1>
            <Publications />
        </div>
    ) : (
        <div className="not-authenticated">
            <p>You are not logged in. Please </p>
            <Link to="/login">log in</Link>
        </div>
    );
}

export default Home;
