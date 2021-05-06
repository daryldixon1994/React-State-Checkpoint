import React from "react";
import { Card } from "react-bootstrap";
import myPhoto from "../Card/myPhoto.jpg";
import './Card.css'

class CardComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            Name: "Mohamed Anouar Jabri",
            Profession: "Engineer and Web Developer",
            Bio: "Bio: I am a GoMyCode student and I am learning React JS",
            count: 0,
            interval: null,
        };
        console.log(this)
    }

    componentDidMount() {
        this.setState({
            interval: setInterval(
                () => this.setState({ count: this.state.count + 1 }),
                1000
            ),
        });
    }
    
    componentWillUnmount() {
        clearInterval(this.state.interval);
    }
    render() {
        return (
            <div>
                <p style={{ color: "red" }}>
                    This component has mounted since {this.state.count} secondes
                </p>
                <Card className="card" style={{ width: "30%", margin: "auto" }}>
                    <Card.Body>
                        <img
                            src={myPhoto}
                            alt="photo_de_profil"
                            width="60%" 
                            className="photo"
                        />
                        <Card.Title>
                            <h1> {this.state.Name} </h1>
                        </Card.Title>
                        <Card.Text>
                            <h2>
                                {this.state.Profession} <br />
                            </h2>
                            <h4>{this.state.Bio}</h4>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default CardComponent;
