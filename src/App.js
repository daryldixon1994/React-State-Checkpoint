import React from "react";
import './App.css'
import CardComponent from './Card/Card'
import NavBarComponent from './Navbar/NavBarComponent';
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
    constructor() {
        super()
        this.state = { show: false };
    }
    Toggle = () => {
        this.setState({ show: !this.state.show });
    };
    render() {
        return (
            <div className="app">
                <NavBarComponent />
                <Button
                    variant="primary"
                    className="pos_btn"
                    onClick={this.Toggle}
                >
                    {this.state.show ? "Hide Profil" : "Show Profil"}
                </Button>{" "}
                {this.state.show ? <CardComponent /> : null}
            </div>
        );
    }
}

export default App;
