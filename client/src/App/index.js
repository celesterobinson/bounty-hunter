import React from 'react';
import Form from "./shared/Form";
import BountyList from "./BountyList";
import "./styles/App.css";

function App(props) {
    return (
        <div className="app-wrapper">
            <h1>Bounty Hunter To-Kill List</h1>
            <Form add clear/>
            <BountyList />
        </div>
    )
}

export default App;
